import { PrismaClient } from '../../generated/prisma';
import { SkillEntity } from '../../core/entities/skill.entity';
import { SkillCategory } from '../../shared/enums/skill-category.enum';
import { v4 as uuidv4 } from 'uuid';
import { generateSlugs } from '../../shared/utils/slug-generator';

const prisma = new PrismaClient();

export class SkillRepository {
  private mapSkill(skill: any): SkillEntity {
    return {
      id: skill.id,
      name: skill.name,
      slugs: skill.slugs,
      icon: skill.icon || undefined,
      category: skill.category,
      isActiveUse: skill.isActiveUse,
      description: skill.description || undefined,
      displayOrder: skill.displayOrder,
      createdAt: skill.createdAt,
      updatedAt: skill.updatedAt,
    };
  }

  async getAllSkills(): Promise<SkillEntity[]> {
    const skills = await prisma.skill.findMany({
      orderBy: { displayOrder: 'asc' },
    });

    return skills.map(this.mapSkill);
  }

  async getSkillById(id: string): Promise<SkillEntity | null> {
    const skill = await prisma.skill.findUnique({ where: { id } });
    return skill ? this.mapSkill(skill) : null;
  }

  async getSkillBySlug(slug: string): Promise<SkillEntity | null> {
    const skill = await prisma.skill.findFirst({
      where: {
        slugs:
          { has: slug.toLowerCase() }
      }
    });
    return skill ? this.mapSkill(skill) : null;
  }

  async getSkillsByCategory(category: SkillCategory): Promise<SkillEntity[]> {
    const skills = await prisma.skill.findMany({
      where: { category: category.toUpperCase() as SkillCategory, },
      orderBy: { displayOrder: 'asc' },
    });

    return skills.map(this.mapSkill);
  }

  async upsertSkill(skill: SkillEntity): Promise<SkillEntity> {
    const upserted = await prisma.skill.upsert({
      where: { id: skill.id },
      update: {
        name: skill.name,
        icon: skill.icon || null,
        category: skill.category,
        isActiveUse: skill.isActiveUse,
        description: skill.description || null,
        displayOrder: skill.displayOrder,
      },
      create: {
        id: skill.id,
        name: skill.name,
        slugs: generateSlugs(skill.name),
        icon: skill.icon || null,
        category: skill.category,
        isActiveUse: skill.isActiveUse,
        description: skill.description || null,
        displayOrder: skill.displayOrder,
      },
    });

    return this.mapSkill(upserted);
  }

  async deleteSkillById(id: string): Promise<void> {
    await prisma.skill.delete({ where: { id } });
  }

  async deleteSkillBySlug(slug: string): Promise<void> {
    await prisma.skill.deleteMany({
      where: {
        slugs:
          { has: slug.toLowerCase() }
      }
    });
  }

  async createSkill(skill: Omit<SkillEntity, 'id'>): Promise<SkillEntity> {
    const newSkill: SkillEntity = {
      id: uuidv4(),
      name: skill.name,
      slugs: generateSlugs(skill.name),
      icon: skill.icon || undefined,
      category: skill.category,
      isActiveUse: skill.isActiveUse,
      description: skill.description || undefined,
      displayOrder: skill.displayOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const createdSkill = await this.upsertSkill(newSkill);
    return createdSkill;
  }
}
