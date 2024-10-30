import React from 'react';
import { Pagination } from 'react-bootstrap';
import './styles.scss';

interface PaginationPageProps {
  page: number;
  totalPages: number;
  onClickPrevious: (e: React.MouseEvent<HTMLElement>) => void;
  onClickNext: (e: React.MouseEvent<HTMLElement>) => void;
}

const PaginationPage: React.FC<PaginationPageProps> = ({
  page,
  totalPages,
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <Pagination>
      <Pagination.Prev
        disabled={page === 1 ? true : false}
        onClick={onClickPrevious}
      />
      <Pagination.Item disabled>{page}</Pagination.Item>
      <Pagination.Next
        onClick={onClickNext}
        disabled={page === totalPages ? true : false}
      />
    </Pagination>
  );
};

export default PaginationPage;
