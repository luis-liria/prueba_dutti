import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as starpageActions from '../actions/starpage.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ShipsService } from 'src/app/services/ships.service';



@Injectable()
export class StarspageEffects {

    constructor(
        private actions$: Actions,
        private shipsService: ShipsService
    ){}


 

    cargarStarchipsPage$ = createEffect(
        () => this.actions$.pipe(
            ofType( starpageActions.cargarStarPage ),
            mergeMap(
                (action) => this.shipsService.getShipsPage(action.page)
                    .pipe(
                        tap(data => console.log('page',data)),
                        map( starships => starpageActions.cargarStarSuccess({ starships: starships }) ),
                        catchError( err => of(starpageActions.cargarStarError({ payload: err })) )
                    )
            )
        )
    );

}