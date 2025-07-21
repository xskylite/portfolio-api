import { Response as BunResponse } from 'elysia'; // или можешь убрать — Bun делает глобальным

export const handleResponse = ({ response }: { response: any }) => {
  // Если уже Response — вернуть как есть
  if (response instanceof Response) return response;

  // Если это уже объект с success и data — вернуть как есть
  if (
    response &&
    typeof response === 'object' &&
    'success' in response &&
    'data' in response
  ) {
    return Response.json(response);
  }

  // Обернуть всё остальное
  return Response.json({
    success: true,
    data: response ?? null
  });
};
