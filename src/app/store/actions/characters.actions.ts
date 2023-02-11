import { createAction, props } from '@ngrx/store';


export const cargarCharacters = createAction('[Characters] Cargar Characters');

export const cargarCharactersSuccess = createAction(
    '[Characters] Cargar Characters Success',
    props<{ Characters: any[] }>()
);

export const cargarCharactersError = createAction(
    '[Characters] Cargar Characters Error',
    props<{ payload: any }>()
);