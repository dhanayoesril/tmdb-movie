import React from 'react';
import Config from '../../configs/config';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import './styles.scss';

interface HeaderProps {
  isTransparent: boolean;
  showBackBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  isTransparent = false,
  showBackBtn = true,
}) => {
  const history = useHistory();

  const onClickFilter = (key: string) => {
    history.push(`/${key}`);
  };
  return (
    <div className={`header-wrapper ${isTransparent ? 'transparent' : ''}`}>
      <div>
        {showBackBtn && (
          <ArrowLeft
            color="white"
            size={25}
            className="mr-4 back-btn"
            onClick={() => history.goBack()}
          />
        )}
        <img
          src={`${Config.tmdb.iconUrl}/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`}
          alt="tmdb_logo"
          width="175"
          onClick={() => history.push('/')}
        />
      </div>
      <div>
        <DropdownButton title="Filter Movies Category" variant="default">
          <Dropdown.Item as="button" onClick={() => onClickFilter('popular')}>
            Popular
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => onClickFilter('now-playing')}
          >
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
    </div>
  );
};

export default Header;
