import type { ErrorHandler } from 'elysia';

export const handleError: ErrorHandler<any> = ({ code, error }) => {
  console.error(`[${code}]`, error);

  return {
    success: false,
    error: error.message || 'An unexpected error occurred',
  };
}