export interface IState {
  loading: boolean;
  data: [];
  error: string;
}

export interface IMovieData {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results?: [];
}

export interface IPayload {
  type: string;
  payload: IMovieData;
  error: string;
}
