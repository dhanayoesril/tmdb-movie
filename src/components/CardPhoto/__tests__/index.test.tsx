import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPhoto from '../../CardPhoto';

it('should show card photo data according to the received props', () => {
  render(
    <CardPhoto
      name="Cristiano Ronaldo"
      character="Winger"
      photoPath="/image.jpg"
    />
  );
  const name = screen.getByText(/Cristiano Ronaldo/i);
  const character = screen.getByText(/Winger/i);
  expect(name).toBeInTheDocument();
  expect(character).toBeInTheDocument();
});
