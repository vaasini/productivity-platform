import type { ApiResponse } from '@eng-platform/shared';
import { ok } from '@eng-platform/shared';

export function App(): JSX.Element {
  const health: ApiResponse<{ status: string }> = ok({ status: 'ready' });

  return (
    <main>
      <h1>Engineering Productivity Platform</h1>
      <p>Shared health status: {health.data.status}</p>
    </main>
  );
}
