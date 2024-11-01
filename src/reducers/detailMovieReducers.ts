import * as ACTION_TYPES from '../constants/actionTypes';
import { IDetailPayload, IDetailState } from '../types';

const initialStateDetailMovieReducers: IDetailState = {
  loading: true,
  data: {},
  error: '',
};

export const detailMovieReducers = (
  state = initialStateDetailMovieReducers,
  action: IDetailPayload
) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DETAIL_MOVIE_PENDING:
      return {
        ...state,
        loading: true,
        data: [],
        error: '',
      };
    case ACTION_TYPES.FETCH_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case ACTION_TYPES.FETCH_DETAIL_MOVIE_ERROR:
      console.log('mashok: ', action);
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
