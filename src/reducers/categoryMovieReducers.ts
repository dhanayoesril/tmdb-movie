import * as ACTION_TYPES from '../constants/actionTypes';
import { IState, IPayload } from '../types';

const initialStateCategoryMovieReducers: IState = {
  loading: true,
  data: [],
  error: '',
};

export const categoryMovieReducers = (
  state = initialStateCategoryMovieReducers,
  action: IPayload
) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CATEGORY_MOVIE_PENDING:
      return {
        ...state,
        loading: true,
        data: [],
        error: '',
      };
    case ACTION_TYPES.FETCH_CATEGORY_MOVIE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.payload.results,
        error: '',
      };
    case ACTION_TYPES.FETCH_CATEGORY_MOVIE_ERROR:
      return {
        ...state,
        loading: true,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};
