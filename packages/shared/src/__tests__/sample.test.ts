import { describe, expect, it } from 'vitest';
import { fail, ok, type ApiResponse } from '../index.js';

describe('ApiResponse helpers', () => {
  it('creates a successful response', () => {
    const response: ApiResponse<{ id: string }> = ok({ id: '1' });
    expect(response.success).toBe(true);
    expect(response.data.id).toBe('1');
  });

  it('creates a failure response', () => {
    const response = fail('boom');
    expect(response.success).toBe(false);
    expect(response.error).toBe('boom');
  });
});
