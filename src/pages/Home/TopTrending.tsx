import React from 'react';
import './styles.scss';
import { Col, Row } from 'react-bootstrap';

interface TopTrendingProps {
  title: string;
  overview: string;
}

const TopTrending: React.FC<TopTrendingProps> = ({ title, overview }) => {
  return (
    <Row>
      <Col md={4}>
        <div className="top-trending-wrapper">
          <div className="category">Top 1 Trending</div>
          <div className="title">{title || ''}</div>
          <div className="overview">{overview || ''}</div>
        </div>
      </Col>
    </Row>
  );
};

export default TopTrending;
