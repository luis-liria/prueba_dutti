import { createReducer, on } from '@ngrx/store';
import { cargarStarError, cargarStarPage, cargarStarSuccess } from '../actions/starpage.actions';

export interface StarpageState {
  starships: any;
  loading: boolean;
  error: any;
}

export const StarpageInitialState: StarpageState = {
  starships: null,
  loading: false,
  error: null,
};

const _starpageReducer = createReducer(
  StarpageInitialState,



  on( cargarStarPage, (state, { page }) => ({ 
    ...state, 
    loading: true,
    page: page
})),

  on(cargarStarSuccess, (state, { starships }) => ({
    ...state,
    loading: false,
    starships: { ...starships },
  })),

  on(cargarStarError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function starpageReducer(state, action) {
  return _starpageReducer(state, action);
}
