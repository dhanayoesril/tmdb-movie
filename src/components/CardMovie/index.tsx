import React from 'react';
import Config from '../../configs/config';
import { formatDate } from '../../helpers';
import './styles.scss';

interface CardMovieProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  width?: string;
}

const CardMovie: React.FC<CardMovieProps> = ({
  title,
  releaseDate,
  posterPath,
  onClick,
  width = '180',
}) => {
  return (
    <div className="card-movie-wrapper">
      <img
        className="movie-img"
        src={`${Config.tmdb.imageUrl}/original${posterPath}`}
        alt="tmdb_logo"
        width={width}
        onClick={onClick}
      />
      <div className="title">{title || ''}</div>
      <div className="release-year">
        {releaseDate ? formatDate(releaseDate) : ''}
      </div>
    </div>
  );
};

export default CardMovie;
