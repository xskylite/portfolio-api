import { Elysia } from 'elysia';

export const HealthRoutes = new Elysia({ prefix: '/api/health' })
  .get('/', () => ({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  }))