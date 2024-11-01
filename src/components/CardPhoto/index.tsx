import React from 'react';
import Config from '../../configs/config';
import './styles.scss';

interface ICardPhoto {
  name?: string;
  character?: string;
  photoPath?: string;
}

const CardPhoto: React.FC<ICardPhoto> = ({ name, character, photoPath }) => {
  return (
    <div className="card-photo-wrapper mr-3">
      <div className="obj-el">
        <img
          className="card-img "
          src={`${Config.tmdb.imageUrl}/original${
            photoPath || '/33quyMobSxu2HNFE4HHT5w5RTLW.jpg'
          }`}
          alt="cardPhoto"
        />
      </div>
      <div className="name obj-el">{name}</div>
      <div className="char obj-el">{character}</div>
    </div>
  );
};

export default CardPhoto;
