import { createAction, props } from '@ngrx/store';



export const cargarStarPage = createAction(
    '[Starpage] Cargar StarStarpage',
    props<{ page: any }>()
    
);

export const cargarStarSuccess = createAction(
    '[Starpage] Cargar StarStarpage Success',
    props<{ starships: any }>()
);

export const cargarStarError = createAction(
    '[Starpage] Cargar StarStarpage Error',
    props<{ payload: any }>()
);