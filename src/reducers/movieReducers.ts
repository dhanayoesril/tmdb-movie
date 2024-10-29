import * as ACTION_TYPES from '../constants/actionTypes';
import { IState, IPayload } from '../types';

const initialStateMovieReducers: IState = {
  loading: true,
  data: [],
  error: '',
};

export const movieReducers = (
  state = initialStateMovieReducers,
  action: IPayload
) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_TRENDING_MOVIE_PENDING:
      return {
        ...state,
        loading: true,
        data: [],
        error: '',
      };
    case ACTION_TYPES.FETCH_TRENDING_MOVIE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.payload.results,
        error: '',
      };
    case ACTION_TYPES.FETCH_TRENDING_MOVIE_ERROR:
      return {
        ...state,
        loading: true,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
