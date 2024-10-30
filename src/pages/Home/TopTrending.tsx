import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import './styles.scss';

interface TopTrendingProps {
  title: string;
  overview: string;
}

const TopTrending: React.FC<TopTrendingProps> = ({ title, overview }) => {
  const history = useHistory();

  const [input, setInput] = useState<string>('');
  const [showErrMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleClickSearch = () => {
    if (input?.length < 1) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      history.push(`/search?${input}`);
    }
  };

  return (
    <Row>
      <Col md={4}>
        <div className="top-trending-wrapper">
          <div className="category">Top 1 Trending</div>
          <div className="title">{title || ''}</div>
          <div className="overview">{overview || ''}</div>
        </div>
      </Col>
      <Col md={4}></Col>
      <Col md={4}>
        <div className="search-wrapper">
          <input
            className="form-control mr-3"
            placeholder="Search Movies by Title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Search
            color="white"
            size={25}
            className="mr-4 search-btn"
            onClick={handleClickSearch}
          />
        </div>
        {showErrMessage && (
          <div className="err-message mt-1">Input must be filled</div>
        )}
      </Col>
    </Row>
  );
};

export default TopTrending;
