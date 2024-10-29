import React, { useEffect } from 'react';
import { getTrendingMovies } from '../../actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.movieReducers);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return <div>Home Page</div>;
};

export default Home;
