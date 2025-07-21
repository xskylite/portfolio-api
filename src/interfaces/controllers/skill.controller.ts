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
      throw error;
    }
  },

  getSkillById: async (id: string): Promise<SkillEntity | null> => {
    try {
      const skill = await useCase.getSkillById(id);
      return skill;
    } catch (error) {
      throw error;
    }
  },

  getSkillBySlug: async (slug: string): Promise<SkillEntity | null> => {
    try {
      const skill = await useCase.getSkillBySlug(slug);
      return skill;
    } catch (error) {
      throw error;
    }
  },

  upsertSkill: async (skill: SkillEntity): Promise<SkillEntity> => {
    try {
      const upsertedSkill = await useCase.upsertSkill(skill);
      return upsertedSkill;
    } catch (error) {
      throw error;
    }
  },

  deleteSkillById: async (id: string): Promise<void> => {
    try {
      await useCase.deleteSkillById(id);
    } catch (error) {
      throw error;
    }
  },
  deleteSkillBySlug: async (slug: string): Promise<void> => {
    try {
      await useCase.deleteSkillBySlug(slug);
    } catch (error) {
      throw error;
    }
  },

  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    try {
      return await useCase.createSkill(skill);
    } catch (error) {
      throw error;
    }
  }

}