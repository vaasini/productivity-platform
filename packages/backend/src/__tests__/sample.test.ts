import { describe, expect, it } from 'vitest';
import { ok, type ApiResponse } from '@eng-platform/shared';

describe('backend shared import', () => {
  it('uses ApiResponse from @eng-platform/shared', () => {
    const response: ApiResponse<{ status: string }> = ok({ status: 'ok' });
    expect(response.success).toBe(true);
    expect(response.data.status).toBe('ok');
  });
});
