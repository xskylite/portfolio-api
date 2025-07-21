import { Elysia } from 'elysia';
import { SkillController } from '../../../interfaces/controllers/skill.controller';
import { SkillEntity } from '../../../core/entities/skill.entity';
import { SkillCategory } from '../../../shared/enums/skill-category.enum';
import { NotFound } from '../../../shared/utils/error';

export const SkillRoutes = new Elysia({ prefix: '/api/skills' })
  .get('/', async ({ query }) => {
    const skills = await SkillController.getAllSkills();

    let filteredSkills: SkillEntity[] = skills;

    if (query.category as SkillCategory) {
      filteredSkills = skills.filter((skill) => skill.category === query.category);
    }

    return filteredSkills;
  }, {
    detail: {
      tags: ['Skills'],
      summmary: 'Get all skills',
      description: 'Retrive all skills with optional category filter',
    }
  })
  .get('/:id', async (ctx) => {
    const skill = await SkillController.getSkillById(ctx.params.id);
    if (!skill) {
      throw NotFound('Skill not found')
    }
    return skill;
  }, {
    detail: {
      tags: ['Skills'],
      summmary: 'Get skill by ID',
      description: 'Get skill by ID from the database',
    }
  })

  .get('/slug/:slug', async (ctx) => {
    const skill = await SkillController.getSkillBySlug(ctx.params.slug);
    if (!skill) {
      throw NotFound('Skill not found')
    }
    return skill;
  })
  .post('/', async (ctx) => {
    const skill = ctx.body as Omit<SkillEntity, 'id'>;
    const newSkill = await SkillController.createSkill(skill);
    return newSkill;
  })
  .put('/:id', async (ctx) => {
    const skill = ctx.body as SkillEntity;
    skill.id = ctx.params.id;
    const upsertedSkill = await SkillController.upsertSkill(skill);
    return upsertedSkill;
  })
  .delete('/:id', async (ctx) => {
    await SkillController.deleteSkillById(ctx.params.id);
    return;
  })
  .delete('/slug/:slug', async (ctx) => {
    await SkillController.deleteSkillBySlug(ctx.params.slug);
    return;
  })