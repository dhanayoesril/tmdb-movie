import React from 'react';
import './styles.scss';
import { Col, Row } from 'react-bootstrap';

const TopTrending = () => {
  return (
    <Row>
      <Col md={4}>
        <div className="top-trending-wrapper">
          <div className="category">Top 1 Trending</div>
          <div className="title">Joker: Folie à Deux</div>
          <div className="overview">
            While struggling with his dual identity, Arthur Fleck not only
            stumbles upon true love, but also finds the music that's always been
            inside him.
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TopTrending;
