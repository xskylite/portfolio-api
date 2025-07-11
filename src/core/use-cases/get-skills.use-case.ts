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
      logger.error("Error fetching skills:", error);
      throw new Error("Failed to fetch skills");
    }
  }

  async getSkillById(id: string): Promise<SkillEntity | null> {
    try {
      const skill = await this.skillRepository.getSkillById(id);
      return skill;
    } catch (error) {
      logger.error(`Error fetching skill with ID ${id}:`, error);
      throw new Error(`Failed to fetch skill with ID ${id}`);
    }
  }

  async getSkillBySlug(slug: string): Promise<SkillEntity | null> {
    try {
      const skill = await this.skillRepository.getSkillBySlug(slug);
      return skill;
    } catch (error) {
      logger.error(`Error fetching skill with slug ${slug}:`, error);
      throw new Error(`Failed to fetch skill with slug ${slug}`);
    }
  }

  async getSkillsByCategory(category: SkillCategory): Promise<SkillEntity[]> {
    try {
      const skills = await this.skillRepository.getSkillsByCategory(category);
      return skills;
    } catch (error) {
      logger.error(`Error fetching skills for category ${category}:`, error);
      throw new Error(`Failed to fetch skills for category ${category}`);
    }
  }

  async upsertSkill(skill: SkillEntity): Promise<SkillEntity> {
    try {
      const upsertedSkill = await this.skillRepository.upsertSkill(skill);
      return upsertedSkill;
    } catch (error) {
      logger.error("Error upserting skill:", error);
      throw new Error("Failed to upsert skill");
    }
  }

  async deleteSkillById(id: string): Promise<void> {
    try {
      await this.skillRepository.deleteSkillById(id);
    } catch (error) {
      logger.error(`Error deleting skill with ID ${id}:`, error);
      throw new Error(`Failed to delete skill with ID ${id}`);
    }
  }

  async deleteSkillBySlug(slug: string): Promise<void> {
    try {
      await this.skillRepository.deleteSkillBySlug(slug);
    } catch (error) {
      logger.error(`Error deleting skill with slug ${slug}:`, error);
      throw new Error(`Failed to delete skill with slug ${slug}`);
    }
  }


  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    try {
      return await this.skillRepository.createSkill(skill);
    } catch (error) {
      logger.error("Error creating skill:", error);
      throw new Error("Failed to create skill");
    }
  }


}