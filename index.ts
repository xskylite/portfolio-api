import { buildServer } from './src/infrastructure/webserver/elysia.server';

const app = buildServer();

app.listen(3000, () => {
  console.log(`🚀 Server is running on http://localhost:3000`);
});
