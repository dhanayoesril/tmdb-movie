import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingPage from '../../Loading';

test('should render loading page', () => {
  render(<LoadingPage />);
  const spinner = screen.getByTestId('spinner');
  expect(spinner).toBeInTheDocument();
});
