import { SkillRepository } from "../../infrastructure/repositories/skill.repository";
import { SkillEntity } from "../entities/skill.entity";

export class GetSkillsUseCase {
  private skillRepository: SkillRepository;

  constructor() {
    this.skillRepository = new SkillRepository();
  }

  async getAllSkills(): Promise<SkillEntity[]> {
    const skills = await this.skillRepository.getAllSkills();
    return skills;
  }

  async getSkillById(id: string): Promise<SkillEntity | null> {
    const skill = await this.skillRepository.getSkillById(id);
    return skill;
  }

  async getSkillBySlug(slug: string): Promise<SkillEntity | null> {
    const skill = await this.skillRepository.getSkillBySlug(slug);
    return skill;
  }

  async upsertSkill(skill: SkillEntity): Promise<SkillEntity> {
    const upsertedSkill = await this.skillRepository.upsertSkill(skill);
    return upsertedSkill;
  }

  async deleteSkillById(id: string): Promise<void> {
    await this.skillRepository.deleteSkillById(id);
    return;
  }

  async deleteSkillBySlug(slug: string): Promise<void> {
    await this.skillRepository.deleteSkillBySlug(slug);
    return;
  }


  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    return await this.skillRepository.createSkill(skill);
  }
}