import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   starschips: reducers.StarshipsState,
  
}



export const appReducers: ActionReducerMap<AppState> = {
    starschips: reducers.starshipsReducer,
    
}