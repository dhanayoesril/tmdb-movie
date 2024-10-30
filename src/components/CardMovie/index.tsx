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
      <div className="obj-el">
        <img
          className="movie-img"
          src={`${Config.tmdb.imageUrl}/original${posterPath}`}
          alt="tmdb_logo"
          width={width}
          onClick={onClick}
        />
      </div>
      <div className="title obj-el">{title || ''}</div>
      <div className="release-year obj-el">
        {releaseDate ? formatDate(releaseDate) : ''}
      </div>
    </div>
  );
};

export default CardMovie;
