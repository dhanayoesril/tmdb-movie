import React, { useEffect, lazy } from 'react';
import { getTrendingMovies } from '../../actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Movies } from '../../types/';
import './styles.scss';

const CardMovie = lazy(() => import('../../components/CardMovie'));
const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));
const TopTrending = lazy(() => import('./TopTrending'));

const Home = () => {
  const dispatch = useDispatch();
  const { data: dataMovie } = useSelector(
    (state: RootState) => state.movieReducers
  );

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return (
    <div
      className="home-wrapper"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/uGmYqxh8flqkudioyFtD7IJSHxK.jpg)`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header isTransparent={true} />
      <div className="content-wrapper">
        <TopTrending />
        <div className="trending-title mb-2">Trending Movies</div>
        <div className="movie-list-wrapper">
          {(dataMovie as Movies[]).map((item) => (
            <div className="mr-4">
              <CardMovie
                title={item.title}
                releaseDate={item.release_date}
                posterPath={item.poster_path}
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
