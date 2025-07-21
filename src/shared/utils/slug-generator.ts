const MANUAL_ALIASES: Record<string, string[]> = {
  "node-js": ["node"],
  "golang": ["go"],
  "vue-js": ["vue"],
  "vuejs": ["vue"],
  "typescript": ["ts"],
  "javascript": ["js"],
  "nuxt": ["nuxtjs"],
  "react": ["reactjs"],
  "elysia": ["elysiajs", "elysia-js"],
  "elysiajs": ["elysia-js", "elysia"],
  "fastify": ["fastifyjs", "fastify-js"],
};

function normalizeSlug(slug: string): string {
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function generateSlugs(name: string): string[] {
  const base = normalizeSlug(name);
  const alt1 = name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const alt2 = name.toLowerCase().replace(/\s+/g, "-");
  const defaultSlug = name.toLowerCase();

  const manual = MANUAL_ALIASES[base] || [];

  const all = new Set([
    base,
    normalizeSlug(alt1),
    normalizeSlug(alt2),
    normalizeSlug(name.toLowerCase()),
    defaultSlug,
    ...manual.map(normalizeSlug),
  ]);

  return Array.from(all);
}