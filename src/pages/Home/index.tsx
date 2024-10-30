import React, { useEffect, useState, lazy } from 'react';
import Config from '../../configs/config';
import { getTrendingMovies } from '../../actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Movies } from '../../types/';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const CardMovie = lazy(() => import('../../components/CardMovie'));
const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));
const TopTrending = lazy(() => import('./TopTrending'));
const Pagination = lazy(() => import('../../components/Pagination'));
const Loading = lazy(() => import('../../pages/Loading'));

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    data: dataMovie,
    page,
    total_pages,
    loading: loadingDataMovie,
  } = useSelector((state: RootState) => state.trendingMovieReducers);

  const [dataTopTrending, setDataTopTrending] = useState<any>({});

  useEffect(() => {
    dispatch(getTrendingMovies('day', 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataMovie?.length > 0 && page === 1) {
      const trending = dataMovie?.find((item, idx) => idx === 0);
      setDataTopTrending(trending);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMovie]);

  const handleClickCard = (id: number) => {
    history.push(`/${id}/detail`);
  };

  let activeClass = 'cp-placeholder';
  if (loadingDataMovie) activeClass += ' active';

  if (loadingDataMovie) {
    return <Loading />;
  }

  return (
    <div
      className={`home-wrapper ${activeClass}`}
      style={{
        backgroundImage: `url(${Config.tmdb.imageUrl}/original/${dataTopTrending?.backdrop_path}`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header isTransparent={true} showBackBtn={false} />
      <div className="content-wrapper">
        <TopTrending
          title={dataTopTrending?.title}
          overview={dataTopTrending?.overview}
        />
        <div className="trending-title mb-2 obj-el">Trending Nowadays</div>
        <div className="movie-list-wrapper">
          {(dataMovie as Movies[]).map((item, idx) => (
            <div className="mr-4" key={idx}>
              <CardMovie
                title={item.title}
                releaseDate={item.release_date}
                posterPath={
                  item.poster_path || '/jv9dXTSZSEIUwFV5Wrsov41XKZ4.jpg'
                }
                onClick={() => handleClickCard(item.id)}
              />
            </div>
          ))}
        </div>
        <div className="pagination-wrapper">
          <Pagination
            page={page}
            totalPages={total_pages}
            onClickPrevious={() => dispatch(getTrendingMovies('day', page - 1))}
            onClickNext={() => dispatch(getTrendingMovies('day', page + 1))}
          />
        </div>
      </div>
      <Footer isTransparent={true} />
    </div>
  );
};

export default Home;
