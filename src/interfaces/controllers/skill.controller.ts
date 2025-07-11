import { GetSkillsUseCase } from "../../core/use-cases/get-skills.use-case";
import { SkillRepository } from "../../infrastructure/repositories/skill.repository";
import { SkillEntity } from "../../core/entities/skill.entity";
import { logger } from "../../shared/utils/logger";
import { SkillCategory } from "../../shared/enums/skill-category.enum";

const useCase = new GetSkillsUseCase();

export const SkillController = {
  getAllSkills: async (): Promise<SkillEntity[]> => {
    try {
      const skills = await useCase.getAllSkills();
      return skills;
    } catch (error) {
      logger.error("Error fetching all skills:", error);
      throw new Error("Failed to fetch all skills");
    }
  },

  getSkillById: async (id: string): Promise<SkillEntity | null> => {
    try {
      const skill = await useCase.getSkillById(id);
      return skill;
    } catch (error) {
      logger.error(`Error fetching skill with ID ${id}:`, error);
      throw new Error(`Failed to fetch skill with ID ${id}`);
    }
  },

  getSkillBySlug: async (slug: string): Promise<SkillEntity | null> => {
    try {
      const skill = await useCase.getSkillBySlug(slug);
      return skill;
    } catch (error) {
      logger.error(`Error fetching skill with slug ${slug}:`, error);
      throw new Error(`Failed to fetch skill with slug ${slug}`);
    }
  },

  upsertSkill: async (skill: SkillEntity): Promise<SkillEntity> => {
    try {
      const upsertedSkill = await useCase.upsertSkill(skill);
      return upsertedSkill;
    } catch (error) {
      logger.error("Error upserting skill:", error);
      throw new Error("Failed to upsert skill");
    }
  },

  getSkillsByCategory: async (category: SkillCategory): Promise<SkillEntity[]> => {
    try {
      const skills = await useCase.getSkillsByCategory(category);
      return skills;
    } catch (error) {
      logger.error(`Error fetching skills by category ${category}:`, error);
      throw new Error(`Failed to fetch skills by category ${category}`);
    }
  },

  deleteSkillById: async (id: string): Promise<void> => {
    try {
      await useCase.deleteSkillById(id);
    } catch (error) {
      logger.error(`Error deleting skill with ID ${id}:`, error);
      throw new Error(`Failed to delete skill with ID ${id}`);
    }
  },
  deleteSkillBySlug: async (slug: string): Promise<void> => {
    try {
      await useCase.deleteSkillBySlug(slug);
    } catch (error) {
      logger.error(`Error deleting skill with slug ${slug}:`, error);
      throw new Error(`Failed to delete skill with slug ${slug}`);
    }
  },

  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    try {
      return await useCase.createSkill(skill);
    } catch (error) {
      logger.error("Error creating skill:", error);
      throw new Error("Failed to create skill");
    }
  }

}