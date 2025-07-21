import { ProjectRepository } from "../../infrastructure/repositories/project.repository";
import { ProjectEntity } from "../entities/project.entity";
import { logger } from "../../shared/utils/logger";

export interface CreateProjectRequest {
  name: string;
  description: string;
  logo?: string;
  version?: string;
  website?: string;
  isDone: boolean;
  isReceivingUpdates: boolean;
  isInProduction: boolean;
  previewImage?: string;
  category: string;
  type: string;
  displayOrder: number;
  skillIds?: { skillId: string; version?: string }[];
}

export class GetProjectUseCase {
  private projectRepository: ProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  async getAllProjects(): Promise<ProjectEntity[]> {
    try {
      const projects = await this.projectRepository.getAllProjects();
      return projects;
    } catch (error) {
      throw error
    }
  }

  async getProjectById(id: string): Promise<ProjectEntity | null> {
    try {
      const project = await this.projectRepository.getProjectById(id);
      return project;
    } catch (error) {
      logger.error("Error fetching project by id:", error);
      throw error;
    }
  }

  async createProject(request: CreateProjectRequest): Promise<ProjectEntity> {
    try {
      const projectData: Omit<ProjectEntity, "id" | "createdAt" | "updatedAt"> = {
        name: request.name,
        description: request.description,
        logo: request.logo,
        version: request.version,
        website: request.website,
        technologies: [],
        isDone: request.isDone,
        isReceivingUpdates: request.isReceivingUpdates,
        isInProduction: request.isInProduction,
        previewImage: request.previewImage,
        category: request.category as any,
        type: request.type as any,
        displayOrder: request.displayOrder,
      };

      const skillIds = request.skillIds || [];

      const newProject = await this.projectRepository.createProject(projectData, skillIds);
      return newProject;
    } catch (error) {
      throw error;
    }
  }

  async updateProject(
    id: string,
    updates: Partial<CreateProjectRequest>
  ): Promise<ProjectEntity | null> {
    try {
      const updateData: Partial<Omit<ProjectEntity, "id" | "createdAt" | "updatedAt">> = {
        name: updates.name,
        description: updates.description,
        logo: updates.logo,
        version: updates.version,
        website: updates.website,
        isDone: updates.isDone,
        isReceivingUpdates: updates.isReceivingUpdates,
        isInProduction: updates.isInProduction,
        previewImage: updates.previewImage,
        category: updates.category as any,
        type: updates.type as any,
        displayOrder: updates.displayOrder,
      };

      const updatedProject = await this.projectRepository.updateProject(id, updateData);

      if (updates.skillIds) {
        return await this.projectRepository.updateProjectTechnologies(id, updates.skillIds);
      }

      return updatedProject;
    } catch (error) {
      throw error;
    }
  }

  async deleteProject(id: string): Promise<boolean> {
    try {
      const result = await this.projectRepository.deleteProject(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}