export interface Movies {
  poster_path: string;
  release_date: string;
  title: string;
  backdrop_path: string;
  overview: string;
  id: number;
}

export interface IState {
  loading: boolean;
  data: Movies[];
  error: string;
  page: number;
  total_pages: number;
}

export interface IGenres {
  id?: number;
  name?: string;
}

export interface IMovieDetailData {
  id?: number;
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  release_date?: string;
  genres?: IGenres;
  runtime?: number;
  tagline?: string;
  overview?: string;
  status?: string;
  revenue?: string;
}

export interface IDetailState {
  loading: boolean;
  data: IMovieDetailData;
  error: string;
}

export interface IMovieData {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results?: Movies[];
}

export interface IPayload {
  type: string;
  payload: IMovieData;
  error: string;
}

export interface IDetailPayload {
  type: string;
  payload: IMovieDetailData;
  error: string;
}

export interface ICastData {
  id?: number;
  name?: string;
  character?: string;
  job?: string;
  profile_path?: string;
}
export interface ICrewData {
  id?: number;
  name?: string;
  character?: string;
  job?: string;
  profile_path?: string;
}

export interface IListCasting {
  id?: number;
  cast?: ICastData[];
  crew?: ICrewData[];
}
