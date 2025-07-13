import { AppError } from './error';
import { logger } from './logger';

export const handleError = ({ code, error }: { code: string | number; error: unknown }) => {
  logger.error(`[${code}] ${error instanceof Error ? error.message : 'Unknown error'}`);

  let status = 500;

  const responseBody: {
    success: boolean;
    error: string;
    message: string;
    details?: Array<{ path: string; message: string; expected: any }>;
  } = {
    success: false,
    error: 'UNKNOWN',
    message: 'Unexpected error',
  };

  if (error instanceof AppError) {
    status = error.status;
    responseBody.error = error.code;
    responseBody.message = error.message;
  } else {
    try {
      const parsed = JSON.parse((error as Error).message);

      if (parsed?.type === 'validation') {
        status = 400;
        responseBody.error = 'VALIDATION_ERROR';
        responseBody.message = parsed.summary || 'Validation failed';
        responseBody.details = parsed.errors?.map((e: any) => ({
          path: e.path,
          message: e.message,
          expected: e.schema,
        }));
      }
    } catch {
      responseBody.message =
        'An unexpected error occurred while processing the error response';
      logger.error('Failed to parse error response', { originalError: error });
    }
  }

  return new Response(JSON.stringify(responseBody), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};