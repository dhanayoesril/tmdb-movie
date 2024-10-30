import React, { useEffect, lazy } from 'react';
import { getCategoryMovies } from '../../actions/movieActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { RootState } from '../../reducers';
import { useHistory } from 'react-router-dom';
import { convertCategoryParams, convertCategoryTitle } from '../../helpers';
import './styles.scss';

const CardMovie = lazy(() => import('../../components/CardMovie'));
const Pagination = lazy(() => import('../../components/Pagination'));
const Loading = lazy(() => import('../../pages/Loading'));

const Category = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const category = useParams<{ category: string }>().category;

  const {
    data: dataCategory,
    page,
    total_pages,
    loading: loadingDataCategory,
  } = useSelector((state: RootState) => state.categoryMovieReducers);

  useEffect(() => {
    dispatch(getCategoryMovies(convertCategoryParams(category)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleClickCard = (id: number) => {
    history.push(`/${id}/detail`);
  };

  let activeClass = 'cp-placeholder';
  if (loadingDataCategory) activeClass += ' active';

  if (loadingDataCategory) {
    return <Loading />;
  }

  return (
    <div className={`category-wrapper ${activeClass}`}>
      <div className="title obj-el">
        {category ? `${convertCategoryTitle(category)} Movies` : ''}
      </div>
      <div className="pagination-wrapper obj-el">
        <Pagination
          page={page}
          totalPages={total_pages}
          onClickPrevious={() =>
            dispatch(
              getCategoryMovies(convertCategoryParams(category), page - 1)
            )
          }
          onClickNext={() =>
            dispatch(
              getCategoryMovies(convertCategoryParams(category), page + 1)
            )
          }
        />
      </div>
      <Row>
        {dataCategory.map((item) => (
          <Col md={2} sm={6} xs={12} className="p-4">
            <CardMovie
              title={item.title}
              releaseDate={item.release_date}
              posterPath={
                item.poster_path || '/jv9dXTSZSEIUwFV5Wrsov41XKZ4.jpg'
              }
              width="100%"
              onClick={() => handleClickCard(item.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
