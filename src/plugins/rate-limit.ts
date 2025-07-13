import { rateLimit } from 'elysia-rate-limit';

export const pluginRateLimit = rateLimit({
  duration: 60_000,
  max: 2000,
  errorResponse: new Response(
    JSON.stringify({
      success: false,
      error: 'Rate limit exceeded. Please try again later.',
    }), {
    status: 429,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
});
