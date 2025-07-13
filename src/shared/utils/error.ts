export class AppError extends Error {
  constructor(
    public message: string,
    public status: number = 500,
    public code: string = 'UNKNOWN'
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const NotFound = (msg = 'Not found') => new AppError(msg, 404, 'NOT_FOUND');
export const BadRequest = (msg = 'Bad request') => new AppError(msg, 400, 'BAD_REQUEST');
export const Unauthorized = (msg = 'Unauthorized') => new AppError(msg, 401, 'UNAUTHORIZED');
export const Forbidden = (msg = 'Forbidden') => new AppError(msg, 403, 'FORBIDDEN');
