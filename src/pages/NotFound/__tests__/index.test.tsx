import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../NotFound';

test('should render page 404 not found', () => {
  render(<NotFound />);
  const text = screen.getByText(/404 Page Not Found/i);
  expect(text).toBeInTheDocument();
});
