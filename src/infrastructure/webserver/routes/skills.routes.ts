import { Elysia } from 'elysia';
import { SkillController } from '../../../interfaces/controllers/skill.controller';
import { SkillEntity } from '../../../core/entities/skill.entity';
import { SkillCategory } from '../../../shared/enums/skill-category.enum';

export const SkillRoutes = new Elysia({ prefix: '/api/skills' })
  .get('/', async (ctx) => {
    const skills = await SkillController.getAllSkills();
    return skills;
  })
  .get('/:id', async (ctx) => {
    const skill = await SkillController.getSkillById(ctx.params.id);
    if (!skill) {
      return { error: 'Skill not found' };
    }
    return skill;
  })

  .get('/slug/:slug', async (ctx) => {
    const skill = await SkillController.getSkillBySlug(ctx.params.slug);
    if (!skill) {
      return { error: 'Skill not found' };
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
    return { success: true };
  })
  .delete('/slug/:slug', async (ctx) => {
    await SkillController.deleteSkillBySlug(ctx.params.slug);
    return { success: true };
  })
  .get('/category/:category', async (ctx) => {
    const rawCategory = ctx.params.category.toUpperCase();
    const allowedCategories = Object.values(SkillCategory);

    if (!allowedCategories.includes(rawCategory as SkillCategory)) {
      return new Response(
        JSON.stringify({ error: `Invalid category: ${ctx.params.category}` }),
        { status: 400 }
      );
    }

    const category = rawCategory as SkillCategory;
    const skills = await SkillController.getSkillsByCategory(category);
    return skills;
  });