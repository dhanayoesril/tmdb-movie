import React from 'react';
import Config from '../../configs/config';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './styles.scss';

interface HeaderProps {
  isTransparent: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent = false }) => {
  const history = useHistory();

  const onClickFilter = (key: string) => {
    history.push(`/${key}`);
  };
  return (
    <div className={`header-wrapper ${isTransparent ? 'transparent' : ''}`}>
      <img
        src={`${Config.tmdb.iconUrl}/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`}
        alt="tmdb_logo"
        width="175"
        onClick={() => history.push('/')}
      />
      <DropdownButton title="Filter Movies" variant="default">
        <Dropdown.Item as="button" onClick={() => onClickFilter('popular')}>
          Popular
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => onClickFilter('now-playing')}>
          Now Playing
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => onClickFilter('upcoming')}>
          Upcoming
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => onClickFilter('top-rated')}>
          Top Rated
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Header;
