export interface SkillEntity {
  id: string;
  name: string;
  slugs: String[];
  icon?: string;
  category: 'FRONTEND' | 'BACKEND' | 'DEVOPS';
  isActiveUse: boolean;
  description?: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}