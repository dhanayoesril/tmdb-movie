import React from 'react';
import Config from '../../configs/config';
import './styles.scss';

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <img
        src={`${Config.tmdb.iconUrl}/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`}
        alt="tmdb_logo"
        width="175"
        className="mb-4"
      />
      <div className="text">404 Page Not Found</div>
    </div>
  );
};

export default NotFound;
