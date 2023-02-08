import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   starschips: reducers.StarshipsState,
//    characters: reducers.charactersState,
}



export const appReducers: ActionReducerMap<AppState> = {
    starschips: reducers.starshipsReducer,
    // characters: reducers.charactersReducer
}