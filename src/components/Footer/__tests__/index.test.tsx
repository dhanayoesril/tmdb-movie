import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../Footer';

it('should render footer component', () => {
  render(<Footer isTransparent={true} />);
  const name = screen.getByText(/Yusril Sapta Wardhana/i);
  expect(name).toBeInTheDocument();
});
