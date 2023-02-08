import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as starchipsActions from '../actions/starships.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ShipsService } from 'src/app/services/ships.service';



@Injectable()
export class StarschipsEffects {

    constructor(
        private actions$: Actions,
        private shipsService: ShipsService
    ){}


    cargarStarchips$ = createEffect(
        () => this.actions$.pipe(
            ofType( starchipsActions.cargarStarships ),
            mergeMap(
                () => this.shipsService.getShips()
                    .pipe(
                        tap(data => console.log(data)),
                        map( starships => starchipsActions.cargarStarshipsSuccess({ starships: starships }) ),
                        catchError( err => of(starchipsActions.cargarStarshipsError({ payload: err })) )
                    )
            )
        )
    );

}