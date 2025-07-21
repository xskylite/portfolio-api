import { t } from 'elysia';
import { ProjectCategory } from '../../../shared/enums/project-category.enum';
import { ProjectType } from '../../../shared/enums/project-type.enum';

export const ProjectTechnologySchema = t.Object({
  skillId: t.String({ minLength: 1, description: 'Skill ID' }),
  version: t.Optional(t.String({ description: 'Technology version' })),
});

export const CreateProjectSchema = t.Object({
  name: t.String({
    minLength: 1,
    maxLength: 255,
    description: 'Project name'
  }),
  description: t.String({
    minLength: 1,
    maxLength: 2000,
    description: 'Project description'
  }),
  logo: t.Optional(t.String({
    description: 'Project logo URL'
  })),
  version: t.Optional(t.String({
    maxLength: 50,
    description: 'Project version'
  })),
  website: t.Optional(t.String({
    description: 'Project website URL'
  })),
  isDone: t.Boolean({
    default: false,
    description: 'Is project completed'
  }),
  isReceivingUpdates: t.Boolean({
    default: false,
    description: 'Is project receiving updates'
  }),
  isInProduction: t.Boolean({
    default: false,
    description: 'Is project in production'
  }),
  previewImage: t.Optional(t.String({
    description: 'Project preview image URL'
  })),
  category: t.Enum(ProjectCategory, {
    description: 'Project category (PERSONAL, ORDER, OPENSOURCE)'
  }),
  type: t.Enum(ProjectType, {
    description: 'Project type (FRONTEND, BACKEND, BOTS)'
  }),
  displayOrder: t.Number({
    minimum: 0,
    default: 0,
    description: 'Display order for sorting'
  }),
  skillIds: t.Optional(t.Array(ProjectTechnologySchema, {
    description: 'Array of skills used in project'
  })),
});

export const UpdateProjectSchema = t.Partial(CreateProjectSchema);

export const ProjectParamsSchema = t.Object({
  id: t.String({
    minLength: 1,
    description: 'Project ID'
  }),
});

export const ProjectQuerySchema = t.Object({
  category: t.Optional(t.Enum(ProjectCategory, {
    description: 'Filter by category'
  })),
  type: t.Optional(t.Enum(ProjectType, {
    description: 'Filter by type'
  })),
  isDone: t.Optional(t.Boolean({
    description: 'Filter by completion status'
  })),
  isInProduction: t.Optional(t.Boolean({
    description: 'Filter by production status'
  })),
  sortBy: t.Optional(t.Union([
    t.Literal('name'),
    t.Literal('createdAt'),
    t.Literal('updatedAt'),
    t.Literal('displayOrder')
  ], {
    default: 'displayOrder',
    description: 'Sort field'
  })),
  sortOrder: t.Optional(t.Union([
    t.Literal('asc'),
    t.Literal('desc')
  ], {
    default: 'asc',
    description: 'Sort order'
  })),
});

export const ProjectTechnologyResponseSchema = t.Object({
  id: t.String(),
  name: t.String(),
  icon: t.Optional(t.String()),
  version: t.Optional(t.String()),
});

export const ProjectResponseSchema = t.Object({
  id: t.String(),
  name: t.String(),
  logo: t.Optional(t.String()),
  version: t.Optional(t.String()),
  website: t.Optional(t.String()),
  technologies: t.Array(ProjectTechnologyResponseSchema),
  isDone: t.Boolean(),
  isReceivingUpdates: t.Boolean(),
  isInProduction: t.Boolean(),
  description: t.String(),
  previewImage: t.Optional(t.String()),
  category: t.Enum(ProjectCategory),
  type: t.Enum(ProjectType),
  displayOrder: t.Number(),
  createdAt: t.String(),
  updatedAt: t.String(),
});

export const ProjectSummaryResponseSchema = t.Object({
  id: t.String(),
  name: t.String(),
  logo: t.Optional(t.String()),
  version: t.Optional(t.String()),
  website: t.Optional(t.String()),
  isDone: t.Boolean(),
  isInProduction: t.Boolean(),
  category: t.Enum(ProjectCategory),
  type: t.Enum(ProjectType),
  technologiesCount: t.Number(),
  createdAt: t.String(),
});

export const ProjectsResponseSchema = t.Array(ProjectResponseSchema);
export const ProjectsSummaryResponseSchema = t.Array(ProjectSummaryResponseSchema);


export const PublicProjectResponseSchema = t.Omit(ProjectResponseSchema, ['isReceivingUpdates', 'displayOrder']);
export const PublicProjectsResponseSchema = t.Array(PublicProjectResponseSchema);