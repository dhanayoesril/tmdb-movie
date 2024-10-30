import React from 'react';
import { render, screen } from '@testing-library/react';
import CardMovie from '../../CardMovie';

test('should show card movie data according to the received props', () => {
  render(
    <CardMovie
      title="Venom"
      releaseDate="2024-10-01"
      posterPath="/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg"
      onClick={() => {}}
      width="100"
    />
  );
  const title = screen.getByText(/Venom/i);
  expect(title).toBeInTheDocument();
});
