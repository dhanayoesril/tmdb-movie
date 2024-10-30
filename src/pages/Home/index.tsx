import React, { useEffect, lazy } from 'react';
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

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data: dataMovie } = useSelector(
    (state: RootState) => state.trendingMovieReducers
  );

  useEffect(() => {
    dispatch(getTrendingMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickCard = (id: number) => {
    history.push(`/${id}/detail`);
  };

  const dataTopTrending = dataMovie?.[0] || {};

  return (
    <div
      className="home-wrapper"
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
        <div className="trending-title mb-2">Trending Movies</div>
        <div className="movie-list-wrapper">
          {(dataMovie as Movies[]).map((item) => (
            <div className="mr-4" key={item.id}>
              <CardMovie
                title={item.title}
                releaseDate={item.release_date}
                posterPath={item.poster_path}
                onClick={() => handleClickCard(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer isTransparent={true} />
    </div>
  );
};

export default Home;
