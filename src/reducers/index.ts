import { combineReducers } from 'redux';
import { trendingMovieReducers } from './trendingMovieReducers';
import { IState, IDetailState } from '../types';
import { detailMovieReducers } from './detailMovieReducers';

const rootReducer = combineReducers({
  trendingMovieReducers,
  detailMovieReducers,
});

export default rootReducer;

export type RootState = {
  trendingMovieReducers: IState;
  detailMovieReducers: IDetailState;
};
