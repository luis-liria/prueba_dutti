import { createReducer, on } from '@ngrx/store';
import {
  cargarStarships,
  cargarStarshipsSuccess,
  cargarStarshipsError,
  cargarStarshipsPage,
} from '../actions';

export interface StarshipsState {
  starships: any;
  loading: boolean;
  error: any;
}

export const StarshipsInitialState: StarshipsState = {
  starships: null,
  loading: false,
  error: null,
};

const _starshipsReducer = createReducer(
  StarshipsInitialState,

  on(cargarStarships, (state) => ({ ...state, loading: true })),
  
  on( cargarStarshipsPage, (state, { page }) => ({ 
    ...state, 
    loading: true,
    page: page
})),



  on(cargarStarshipsSuccess, (state, { starships }) => ({
    ...state,
    loading: false,
    starships: { ...starships },
  })),

  on(cargarStarshipsError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function starshipsReducer(state, action) {
  return _starshipsReducer(state, action);
}
