import { SkillRepository } from "../../infrastructure/repositories/skill.repository";
import { logger } from "../../shared/utils/logger";
import { SkillEntity } from "../entities/skill.entity";
import { SkillCategory } from "../../shared/enums/skill-category.enum";

export class GetSkillsUseCase {
  private skillRepository: SkillRepository;

  constructor() {
    this.skillRepository = new SkillRepository();
  }

  async getAllSkills(): Promise<SkillEntity[]> {
    try {
      const skills = await this.skillRepository.getAllSkills();
      return skills;
    } catch (error) {
      throw error;
    }
  }

  async getSkillById(id: string): Promise<SkillEntity | null> {
    try {
      const skill = await this.skillRepository.getSkillById(id);
      return skill;
    } catch (error) {
      throw error;
    }
  }

  async getSkillBySlug(slug: string): Promise<SkillEntity | null> {
    try {
      const skill = await this.skillRepository.getSkillBySlug(slug);
      return skill;
    } catch (error) {
      throw error;
    }
  }

  async upsertSkill(skill: SkillEntity): Promise<SkillEntity> {
    try {
      const upsertedSkill = await this.skillRepository.upsertSkill(skill);
      return upsertedSkill;
    } catch (error) {
      throw error;
    }
  }

  async deleteSkillById(id: string): Promise<void> {
    try {
      await this.skillRepository.deleteSkillById(id);
    } catch (error) {
      throw error;
    }
  }

  async deleteSkillBySlug(slug: string): Promise<void> {
    try {
      await this.skillRepository.deleteSkillBySlug(slug);
    } catch (error) {
      throw error;
    }
  }


  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    try {
      return await this.skillRepository.createSkill(skill);
    } catch (error) {
      throw error;
    }
  }
}