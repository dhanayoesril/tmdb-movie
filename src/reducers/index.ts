import { combineReducers } from 'redux';
import { IState, IDetailState } from '../types';
import { trendingMovieReducers } from './trendingMovieReducers';
import { detailMovieReducers } from './detailMovieReducers';
import { categoryMovieReducers } from './categoryMovieReducers';
import { searchMovieReducers } from './searchMovieReducers';

const rootReducer = combineReducers({
  trendingMovieReducers,
  detailMovieReducers,
  categoryMovieReducers,
  searchMovieReducers,
});

export default rootReducer;

export type RootState = {
  trendingMovieReducers: IState;
  detailMovieReducers: IDetailState;
  categoryMovieReducers: IState;
  searchMovieReducers: IState;
};
