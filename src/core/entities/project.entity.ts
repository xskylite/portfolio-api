import { ProjectCategory } from "../../shared/enums/project-category.enum";
import { ProjectType } from "../../shared/enums/project-type.enum";

export interface ProjectEntity {
  id: string;
  name: string;
  logo?: string;
  version?: string;
  website?: string;
  technologies: ProjectTechnology[];
  isDone: boolean;
  isReceivingUpdates: boolean;
  isInProduction: boolean;
  description: string;
  previewImage?: string;
  category: ProjectCategory;
  type: ProjectType;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectTechnology {
  id: string;
  name: string;
  icon?: string;
  version?: string;
}