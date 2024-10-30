import Axios from 'axios';
import Config from '../configs/config';
import { Dispatch } from 'redux';
import { IDetailPayload, IPayload } from '../types';
import * as ACTION_TYPES from '../constants/actionTypes';

export const getTrendingMovies = (timeWindow: string = 'day', page: number) => {
  return (dispatch: Dispatch<IPayload>) => {
    dispatch({
      type: ACTION_TYPES.FETCH_TRENDING_MOVIE_PENDING,
      payload: {},
      error: '',
    });
    Axios.get(`${Config.tmdb.apiUrl}/trending/movie/${timeWindow}`, {
      params: {
        page,
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

export const getDetailMovie = (id: number) => {
  return (dispatch: Dispatch<IDetailPayload>) => {
    dispatch({
      type: ACTION_TYPES.FETCH_DETAIL_MOVIE_PENDING,
      payload: {},
      error: '',
    });
    Axios.get(`${Config.tmdb.apiUrl}/movie/${id}`, {
      params: {
        api_key: Config.tmdb.apiKey,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch({
          type: ACTION_TYPES.FETCH_DETAIL_MOVIE_SUCCESS,
          payload: data,
          error: '',
        });
      })
      .catch((err) => {
        const errMessage =
          err?.response?.data?.status_message || 'Error Get Detail Movies';
        dispatch({
          type: ACTION_TYPES.FETCH_DETAIL_MOVIE_ERROR,
          payload: {},
          error: errMessage,
        });
      });
  };
};

export const getCreditMovies = (id: number) => {
  try {
    return Axios.get(`${Config.tmdb.apiUrl}/movie/${id}/credits`, {
      params: {
        api_key: Config.tmdb.apiKey,
      },
    });
  } catch (err: any) {
    const errMessage =
      err?.response?.data?.status_message || 'Error Get Casting Data';
    return errMessage;
  }
};

export const getCategoryMovies = (category: string, page: number = 1) => {
  return (dispatch: Dispatch<IPayload>) => {
    dispatch({
      type: ACTION_TYPES.FETCH_CATEGORY_MOVIE_PENDING,
      payload: {},
      error: '',
    });
    Axios.get(`${Config.tmdb.apiUrl}/movie/${category}`, {
      params: {
        page,
        api_key: Config.tmdb.apiKey,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch({
          type: ACTION_TYPES.FETCH_CATEGORY_MOVIE_SUCCESS,
          payload: data,
          error: '',
        });
      })
      .catch((err) => {
        const errMessage =
          err?.response?.data?.status_message ||
          'Error Get List Category Movies';
        dispatch({
          type: ACTION_TYPES.FETCH_CATEGORY_MOVIE_ERROR,
          payload: {},
          error: errMessage,
        });
      });
  };
};

export const searchMovies = (keyword: string, page: number) => {
  return (dispatch: Dispatch<IPayload>) => {
    dispatch({
      type: ACTION_TYPES.FETCH_SEARCH_MOVIE_PENDING,
      payload: {},
      error: '',
    });
    Axios.get(`${Config.tmdb.apiUrl}/search/movie`, {
      params: {
        query: keyword,
        page,
        api_key: Config.tmdb.apiKey,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch({
          type: ACTION_TYPES.FETCH_SEARCH_MOVIE_SUCCESS,
          payload: data,
          error: '',
        });
      })
      .catch((err) => {
        const errMessage =
          err?.response?.data?.status_message || 'Error Search Movies';
        dispatch({
          type: ACTION_TYPES.FETCH_SEARCH_MOVIE_ERROR,
          payload: {},
          error: errMessage,
        });
      });
  };
};
