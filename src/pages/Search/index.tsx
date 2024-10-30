import React, { useEffect, useState, lazy } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import { searchMovies } from '../../actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './styles.scss';
import { Col, Row } from 'react-bootstrap';

const CardMovie = lazy(() => import('../../components/CardMovie'));

const SearchPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();

  const searchQuery = search?.replace('?', '');
  const keyword = searchQuery?.replace('%20', ' ');

  const [input, setInput] = useState<string>('');
  const [showErrMessage, setShowErrorMessage] = useState<boolean>(false);

  const { data: dataSearchMovie } = useSelector(
    (state: RootState) => state.searchMovieReducers
  );

  const handleClickSearch = () => {
    if (input?.length < 1) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      history.push(`/search?${input}`);
    }
  };

  const handleClickCard = (id: number) => {
    history.push(`/${id}/detail`);
  };

  useEffect(() => {
    setInput(keyword);
    dispatch(searchMovies(keyword));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="search-page-wrapper">
      <div className="text-center mb-4 search-desc">
        Search result for : <span className="result">{keyword}</span>
      </div>

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
        <div className="err-message mt-1 text-danger text-center">
          Input must be filled
        </div>
      )}
      <Row>
        {dataSearchMovie.map((item) => (
          <Col md={2} sm={6} xs={12} className="p-4">
            <CardMovie
              title={item.title}
              releaseDate={item.release_date}
              posterPath={item.poster_path}
              width="100%"
              onClick={() => handleClickCard(item.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchPage;