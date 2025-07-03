import { Elysia } from 'elysia';
import { logger } from './logger';

export const handleError = new Elysia()
  .onError(({ code, error }) => {
    logger.error(`[${code}]`, error);

    return {
      success: false,
      error: typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string'
        ? (error as any).message
        : 'An unexpected error occurred',
    };
  })