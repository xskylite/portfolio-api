import { SkillCategory } from "../../shared/enums/skill-category.enum";

export interface SkillEntity {
  id: string;
  name: string;
  slugs: string[];
  icon?: string;
  category: SkillCategory;
  isActiveUse: boolean;
  description?: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}