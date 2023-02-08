import { createAction, props } from '@ngrx/store';


export const cargarStarships = createAction(
    '[Starships] Cargar Starships',
    
);

export const cargarStarshipsSuccess = createAction(
    '[Starships] Cargar Starships Success',
    props<{ starships: any }>()
);

export const cargarStarshipsError = createAction(
    '[Starships] Cargar Starships Error',
    props<{ payload: any }>()
);