import React from 'react';
import Config from '../../configs/config';
import './styles.scss';

interface CardMovieProps {
  title: string;
  releaseDate: string;
  posterPath: string;
}

const CardMovie: React.FC<CardMovieProps> = ({
  title,
  releaseDate,
  posterPath,
}) => {
  return (
    <div className="card-movie-wrapper">
      <img
        className="movie-img"
        src={`${Config.tmdb.imageUrl}/w500${posterPath}`}
        alt="tmdb_logo"
        width="180"
      />
      <div className="title">{title || ''}</div>
      <div className="release-year">{releaseDate || ''}</div>
    </div>
  );
};

export default CardMovie;
