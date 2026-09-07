import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../App.js';

describe('App', () => {
  it('renders platform title and shared health status', () => {
    render(<App />);
    expect(screen.getByText('Engineering Productivity Platform')).toBeTruthy();
    expect(screen.getByText(/Shared health status: ready/)).toBeTruthy();
  });
});
