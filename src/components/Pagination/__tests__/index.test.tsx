import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../../Pagination';

it('should render Pagination component', () => {
  render(
    <Pagination
      page={1}
      totalPages={5}
      onClickPrevious={() => {}}
      onClickNext={() => {}}
    />
  );
  const pageNow = screen.getByTestId('page-now');
  expect(pageNow).toBeInTheDocument();
});
