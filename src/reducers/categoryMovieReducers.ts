import * as ACTION_TYPES from '../constants/actionTypes';
import { IState, IPayload } from '../types';

const initialStateCategoryMovieReducers: IState = {
  loading: true,
  data: [],
  error: '',
  page: 0,
  total_pages: 0,
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
        page: 0,
        total_pages: 0,
      };
    case ACTION_TYPES.FETCH_CATEGORY_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        error: '',
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case ACTION_TYPES.FETCH_CATEGORY_MOVIE_ERROR:
      return {
        ...state,
        loading: true,
        data: [],
        error: action.error,
        page: 0,
        total_pages: 0,
      };
    default:
      return state;
  }
};
