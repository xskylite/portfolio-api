import { GetSkillsUseCase } from "../../core/use-cases/get-skills.use-case";
import { SkillRepository } from "../../infrastructure/repositories/skill.repository";
import { SkillEntity } from "../../core/entities/skill.entity";

const useCase = new GetSkillsUseCase();

export const SkillController = {
  getAllSkills: async (): Promise<SkillEntity[]> => {
    const skills = await useCase.getAllSkills();
    return skills;
  },

  getSkillById: async (id: string): Promise<SkillEntity | null> => {
    const skill = await useCase.getSkillById(id);
    return skill;
  },

  getSkillBySlug: async (slug: string): Promise<SkillEntity | null> => {
    const skill = await useCase.getSkillBySlug(slug);
    return skill;
  },

  upsertSkill: async (skill: SkillEntity): Promise<SkillEntity> => {
    const upsertedSkill = await useCase.upsertSkill(skill);
    return upsertedSkill;
  },

  deleteSkillById: async (id: string): Promise<void> => {
    await useCase.deleteSkillById(id);
    return;
  },
  deleteSkillBySlug: async (slug: string): Promise<void> => {
    await useCase.deleteSkillBySlug(slug);
    return;
  },

  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    return await useCase.createSkill(skill);
  }

}