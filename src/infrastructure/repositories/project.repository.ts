import { ProjectEntity, ProjectTechnology } from "../../core/entities/project.entity";
import { PrismaClient } from "../../generated/prisma";
import { ProjectCategory } from "../../shared/enums/project-category.enum";
import { ProjectType } from "../../shared/enums/project-type.enum";
import { v4 as uuidv4 } from 'uuid';
import { AppError } from "../../shared/utils/error";

const prisma = new PrismaClient();

export class ProjectRepository {
  private mapProject(project: any): ProjectEntity {
    return {
      id: project.id,
      name: project.name,
      logo: project.logo || undefined,
      version: project.version || undefined,
      website: project.website || undefined,
      technologies: project.technologies?.map((tech: any) => ({
        id: tech.skill.id,
        name: tech.skill.name,
        icon: tech.skill.icon || undefined,
        version: tech.version || undefined,
      })) || [],
      isDone: project.isDone,
      isReceivingUpdates: project.isReceivingUpdates,
      isInProduction: project.isInProduction,
      description: project.description,
      previewImage: project.previewImage || undefined,
      category: project.category as ProjectCategory,
      type: project.type as ProjectType,
      displayOrder: project.displayOrder,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    };
  }

  async getAllProjects(): Promise<ProjectEntity[]> {
    const projects = await prisma.project.findMany({
      include: {
        technologies: {
          include: {
            skill: true,
          },
        },
      },
      orderBy: { displayOrder: "asc" },
    });

    return projects.map(this.mapProject);
  }

  async getProjectById(id: string): Promise<ProjectEntity | null> {
    try {
      const project = await prisma.project.findUnique({
        where: { id },
        include: {
          technologies: {
            include: {
              skill: true,
            },
          },
        },
      });

      return project ? this.mapProject(project) : null;
    } catch (error) {
      console.error('Error getting project by id:', error);
      throw new Error('Failed to get project');
    }
  }

  async createProject(
    projectData: Omit<ProjectEntity, "id" | "createdAt" | "updatedAt">,
    skillIds: { skillId: string; version?: string }[] = []
  ): Promise<ProjectEntity> {
    try {
      const skillIdsOnly = skillIds.map(s => s.skillId);

      const foundSkills = await prisma.skill.findMany({
        where: { id: { in: skillIdsOnly } },
        select: { id: true },
      });

      const foundSkillIds = foundSkills.map(s => s.id);

      const invalidSkillIds = skillIdsOnly.filter(id => !foundSkillIds.includes(id));

      if (invalidSkillIds.length > 0) {
        throw new AppError(`Invalid skill IDs: ${invalidSkillIds.join(', ')}`, 400, 'INVALID_SKILL_IDS');
      }
      const newProject = await prisma.project.create({
        data: {
          id: uuidv4(),
          name: projectData.name,
          logo: projectData.logo || null,
          version: projectData.version || null,
          website: projectData.website || null,
          isDone: projectData.isDone,
          isReceivingUpdates: projectData.isReceivingUpdates,
          isInProduction: projectData.isInProduction,
          description: projectData.description,
          previewImage: projectData.previewImage || null,
          category: projectData.category,
          type: projectData.type,
          displayOrder: projectData.displayOrder,
          technologies: {
            create: skillIds.map(skill => ({
              skillId: skill.skillId,
              version: skill.version || null,
            })),
          },
        },
        include: {
          technologies: {
            include: {
              skill: true,
            },
          },
        },
      });

      return this.mapProject(newProject);
    } catch (error) {
      console.error('Error creating project:', error);

      if (error instanceof AppError) {
        throw error;
      }


      throw new AppError('Failed to create project', 500, 'CREATE_PROJECT_ERROR');
    }
  }

  async updateProject(
    id: string,
    updates: Partial<Omit<ProjectEntity, "id" | "createdAt" | "updatedAt">>
  ): Promise<ProjectEntity | null> {
    try {
      const updatedProject = await prisma.project.update({
        where: { id },
        data: {
          name: updates.name,
          logo: updates.logo || null,
          version: updates.version || null,
          website: updates.website || null,
          isDone: updates.isDone,
          isReceivingUpdates: updates.isReceivingUpdates,
          isInProduction: updates.isInProduction,
          description: updates.description,
          previewImage: updates.previewImage || null,
          category: updates.category,
          type: updates.type,
          displayOrder: updates.displayOrder,
          updatedAt: new Date(),
        },
        include: {
          technologies: {
            include: {
              skill: true,
            },
          },
        },
      });

      return this.mapProject(updatedProject);
    } catch (error) {
      console.error('Error updating project:', error);
      throw new Error('Failed to update project');
    }
  }

  async updateProjectTechnologies(
    projectId: string,
    skillIds: { skillId: string; version?: string }[]
  ): Promise<ProjectEntity | null> {
    try {
      await prisma.projectTechnology.deleteMany({
        where: { projectId },
      });

      await prisma.projectTechnology.createMany({
        data: skillIds.map(skill => ({
          projectId,
          skillId: skill.skillId,
          version: skill.version || null,
        })),
      });
      const updatedProject = await prisma.project.findUnique({
        where: { id: projectId },
        include: {
          technologies: {
            include: {
              skill: true,
            },
          },
        },
      });

      return updatedProject ? this.mapProject(updatedProject) : null;
    } catch (error) {
      console.error('Error updating project technologies:', error);
      throw new Error('Failed to update project technologies');
    }
  }

  async deleteProject(id: string): Promise<boolean> {
    try {
      await prisma.project.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw new Error('Failed to delete project');
    }
  }
}