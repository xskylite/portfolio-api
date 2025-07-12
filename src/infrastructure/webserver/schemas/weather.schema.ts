import { t } from 'elysia';

export const WeatherQuerySchema = t.Object({
  location: t.String(),
  lang: t.Optional(t.String())
});

export const WeatherResponseSchema = t.Object({
  location: t.String(),
  temp_c: t.Number(),
  temp_f: t.Number(),
  condition: t.Object({
    text: t.String(),
    icon: t.String(),
    code: t.Number()
  }),
  humidity: t.Optional(t.Number()),
  windSpeed: t.Optional(t.Number()),
  cachedAt: t.String({ format: 'date-time' }),
  expiresAt: t.String({ format: 'date-time' })
});