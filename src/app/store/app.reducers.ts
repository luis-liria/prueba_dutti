import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   starschips: reducers.StarshipsState,
   starpage: reducers.StarpageState
//    characters: reducers.charactersState,
}



export const appReducers: ActionReducerMap<AppState> = {
    starschips: reducers.starshipsReducer,
    starpage: reducers.starpageReducer,
    // characters: reducers.charactersReducer
}