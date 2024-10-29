export interface Movies {
  poster_path: string;
  release_date: string;
  title: string;
}

export interface IState {
  loading: boolean;
  data: Movies[];
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
