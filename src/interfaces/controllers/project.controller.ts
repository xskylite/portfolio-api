import { GetProjectUseCase, CreateProjectRequest } from "../../core/use-cases/get-projects.use-case";
import { ProjectEntity } from "../../core/entities/project.entity";
import { logger } from "../../shared/utils/logger";

const useCase = new GetProjectUseCase();

export const ProjectController = {
  getAllProjects: async (): Promise<ProjectEntity[]> => {
    try {
      const projects = await useCase.getAllProjects();
      return projects;
    } catch (error) {
      throw error;
    }
  },

  getProjectById: async (id: string): Promise<ProjectEntity | null> => {
    try {
      const project = await useCase.getProjectById(id);
      return project;
    } catch (error) {
      throw error;
    }
  },

  createProject: async (request: CreateProjectRequest): Promise<ProjectEntity> => {
    try {
      const newProject = await useCase.createProject(request);
      logger.info(`Project created successfully: ${newProject.id}`);
      return newProject;
    } catch (error) {
      throw error;
    }
  },

  updateProject: async (
    id: string,
    updates: Partial<CreateProjectRequest>
  ): Promise<ProjectEntity | null> => {
    try {
      const updatedProject = await useCase.updateProject(id, updates);

      logger.info(`Project updated successfully: ${id}`);
      return updatedProject;
    } catch (error) {
      throw error;
    }
  },

  deleteProject: async (id: string): Promise<void> => {
    try {
      const result = await useCase.deleteProject(id);

      if (result) {
        logger.info(`Project deleted successfully: ${id}`);
        return;
      }
    } catch (error) {
      throw error;
    }
  },
};