import express from 'express';
import { ok, type ApiResponse } from '@eng-platform/shared';

const app = express();
const port = Number(process.env['PORT'] ?? 3000);

app.get('/health', (_req, res) => {
  const body: ApiResponse<{ status: string }> = ok({ status: 'ok' });
  res.json(body);
});

if (process.env['NODE_ENV'] !== 'test') {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Backend listening on http://localhost:${port}`);
  });
}

export { app };
