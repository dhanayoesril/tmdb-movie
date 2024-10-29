import Axios from 'axios';
import Config from '../configs/config';
import { Dispatch } from 'redux';
import { IPayload } from '../types';
import * as ACTION_TYPES from '../constants/actionTypes';

export const getTrendingMovies = (timeWindow: string = 'day') => {
  return (dispatch: Dispatch<IPayload>) => {
    dispatch({
      type: ACTION_TYPES.FETCH_TRENDING_MOVIE_PENDING,
      payload: {},
      error: '',
    });
    Axios.get(`${Config.tmdb.apiUrl}/trending/movie/${timeWindow}`, {
      params: {
        api_key: Config.tmdb.apiKey,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch({
          type: ACTION_TYPES.FETCH_TRENDING_MOVIE_SUCCESS,
          payload: data,
          error: '',
        });
      })
      .catch((err) => {
        const errMessage =
          err?.response?.data?.status_message ||
          'Error Get List Trending Movies';
        dispatch({
          type: ACTION_TYPES.FETCH_TRENDING_MOVIE_ERROR,
          payload: {},
          error: errMessage,
        });
      });
  };
};
