import { ProjectEntity, ProjectTechnology } from "../../core/entities/project.entity";

export interface SerializedProjectTechnology {
  id: string;
  name: string;
  icon?: string;
  version?: string;
}

export interface SerializedProject {
  id: string;
  name: string;
  logo?: string;
  version?: string;
  website?: string;
  technologies: SerializedProjectTechnology[];
  isDone: boolean;
  isReceivingUpdates: boolean;
  isInProduction: boolean;
  description: string;
  previewImage?: string;
  category: string;
  type: string;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export class ProjectSerializer {
  static serializeTechnology(technology: ProjectTechnology): SerializedProjectTechnology {
    return {
      id: technology.id,
      name: technology.name,
      icon: technology.icon,
      version: technology.version,
    };
  }

  static serialize(project: ProjectEntity): SerializedProject {
    return {
      id: project.id,
      name: project.name,
      logo: project.logo,
      version: project.version,
      website: project.website,
      technologies: project.technologies.map(this.serializeTechnology),
      isDone: project.isDone,
      isReceivingUpdates: project.isReceivingUpdates,
      isInProduction: project.isInProduction,
      description: project.description,
      previewImage: project.previewImage,
      category: project.category,
      type: project.type,
      displayOrder: project.displayOrder,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
    };
  }

  static serializeMany(projects: ProjectEntity[]): SerializedProject[] {
    return projects.map(project => this.serialize(project));
  }

  static serializeActiveTechnologies(project: ProjectEntity): SerializedProjectTechnology[] {
    return project.technologies
      .filter(tech => tech.name)
      .map(this.serializeTechnology);
  }

  static serializeWithGroupedTechnologies(project: ProjectEntity): SerializedProject & {
    technologiesByCategory?: Record<string, SerializedProjectTechnology[]>
  } {
    const serialized = this.serialize(project);

    return {
      ...serialized,
    };
  }
}