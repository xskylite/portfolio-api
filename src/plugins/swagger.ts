import { swagger } from '@elysiajs/swagger'

export const pluginSwagger = swagger({
  provider: "scalar",
  scalarConfig: {
    theme: "deepSpace",
    layout: "modern",
    customCss: `
      :root {
        --scalar-background-color: #0d0d0d;
        --scalar-text-color: #e0e0e0;
        --scalar-primary-color: #00ffcc;
        --scalar-card-background-color: #1a1a1a;
        --scalar-border-color: #333;
      }

      body {
        background: var(--scalar-background-color)!important;
      }

      .scalar-api-reference {
        background-color: var(--scalar-background-color);
      }
    `
  }
})