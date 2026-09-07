/**
 * Standard API envelope shared by frontend and backend.
 */
export interface ApiResponse<T> {
  readonly data: T;
  readonly success: boolean;
  readonly error?: string;
}

export function ok<T>(data: T): ApiResponse<T> {
  return { data, success: true };
}

export function fail(error: string): ApiResponse<never> {
  return { data: null as never, success: false, error };
}
