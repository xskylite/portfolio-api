import { Elysia } from 'elysia';
import { ProjectController } from '../../../interfaces/controllers/project.controller';
import { ProjectSerializer } from '../../../interfaces/serializers/project.serializer';
import {
  CreateProjectSchema,
  UpdateProjectSchema,
  ProjectParamsSchema,
  ProjectQuerySchema,
} from '../schemas/project.schema';
import { CreateProjectRequest } from '../../../core/use-cases/get-projects.use-case';
import { logger } from '../../../shared/utils/logger';
import { AppError } from '../../../shared/utils/error';
export const ProjectRoutes = new Elysia({ prefix: '/api/projects' })
  .get('/', async ({ query }) => {
    try {
      const projects = await ProjectController.getAllProjects();

      if (!projects || projects.length === 0) return null;

      let filteredProjects = projects ?? [];

      if (query.category) {
        filteredProjects = filteredProjects.filter(p => p.category === query.category?.toUpperCase());
      }

      if (query.type) {
        filteredProjects = filteredProjects.filter(p => p.type === query.type?.toUpperCase());
      }

      if (query.isDone !== undefined) {
        filteredProjects = filteredProjects.filter(p => p.isDone === query.isDone);
      }

      if (query.isInProduction !== undefined) {
        filteredProjects = filteredProjects.filter(p => p.isInProduction === query.isInProduction);
      }

      if (query.sortBy) {
        filteredProjects.sort((a, b) => {
          const aValue: any = a[query.sortBy as keyof typeof a];
          const bValue: any = b[query.sortBy as keyof typeof b];

          let comparison = 0;
          if (aValue < bValue) comparison = -1;
          if (aValue > bValue) comparison = 1;

          return query.sortOrder === 'desc' ? -comparison : comparison;
        });
      }

      const serializedProjects = ProjectSerializer.serializeMany(filteredProjects);
      return serializedProjects;
    } catch (error) {
      throw error;
    }
  }, {
    query: ProjectQuerySchema,
    detail: {
      tags: ['Projects'],
      summary: 'Get all projects',
      description: 'Retrieve all projects with optional filtering and sorting'
    }
  })

  .get('/:id', async ({ params }) => {
    try {
      const project = await ProjectController.getProjectById(params.id);

      if (!project) {
        throw new AppError('PROJECT_NOT_FOUND');
      }

      const serializedProject = ProjectSerializer.serialize(project);
      return serializedProject
    } catch (error) {
      throw new AppError('GET_PROJECT_BY_ID_ERROR');
    }
  }, {
    params: ProjectParamsSchema,
    detail: {
      tags: ['Projects'],
      summary: 'Get project by ID',
      description: 'Retrieve a specific project by its ID'
    }
  })

  .post('/', async ({ body }) => {
    try {
      const projectData: CreateProjectRequest = {
        name: body.name,
        description: body.description,
        logo: body.logo,
        version: body.version,
        website: body.website,
        isDone: body.isDone,
        isReceivingUpdates: body.isReceivingUpdates,
        isInProduction: body.isInProduction,
        previewImage: body.previewImage,
        category: body.category,
        type: body.type,
        displayOrder: body.displayOrder,
        skillIds: body.skillIds || [],
      };

      const newProject = await ProjectController.createProject(projectData);
      const serializedProject = ProjectSerializer.serialize(newProject);
      return serializedProject;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('CREATE_PROJECT_ERROR', 500, 'CREATE_PROJECT_ERROR');
    }
  }, {
    body: CreateProjectSchema,
    detail: {
      tags: ['Projects'],
      summary: 'Create new project',
      description: 'Create a new project with associated technologies'
    }
  })

  .put('/:id', async ({ params, body }) => {
    try {
      const updates: Partial<CreateProjectRequest> = body;
      const updatedProject = await ProjectController.updateProject(params.id, updates);

      if (!updatedProject) {
        throw new AppError('PROJECT_NOT_FOUND');
      }

      const serializedProject = ProjectSerializer.serialize(updatedProject);
      return serializedProject;
    } catch (error) {
      throw new AppError('UPDATE_PROJECT_ERROR');
    }
  }, {
    params: ProjectParamsSchema,
    body: UpdateProjectSchema,
    detail: {
      tags: ['Projects'],
      summary: 'Update project',
      description: 'Update an existing project'
    }
  })

  .delete('/:id', async ({ params }) => {
    try {
      const result = await ProjectController.deleteProject(params.id);
      return result
    } catch (error) {
      throw error;
    }
  }, {
    params: ProjectParamsSchema,
    detail: {
      tags: ['Projects'],
      summary: 'Delete project',
      description: 'Delete a project and all its associated data'
    }
  });