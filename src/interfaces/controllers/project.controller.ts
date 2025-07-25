import { GetProjectUseCase, CreateProjectRequest } from "../../core/use-cases/get-projects.use-case";
import { ProjectEntity } from "../../core/entities/project.entity";

const useCase = new GetProjectUseCase();

export const ProjectController = {
  getAllProjects: async (): Promise<ProjectEntity[]> => {
    const projects = await useCase.getAllProjects();
    return projects;
  },

  getProjectById: async (id: string): Promise<ProjectEntity | null> => {
    const project = await useCase.getProjectById(id);
    return project;
  },

  createProject: async (request: CreateProjectRequest): Promise<ProjectEntity> => {
    const newProject = await useCase.createProject(request);
    return newProject;
  },

  updateProject: async (
    id: string,
    updates: Partial<CreateProjectRequest>
  ): Promise<ProjectEntity | null> => {
    const updatedProject = await useCase.updateProject(id, updates);

    return updatedProject;
  },

  deleteProject: async (id: string): Promise<void> => {
    const result = await useCase.deleteProject(id);

    if (result) {
      return;
    }
  },
};