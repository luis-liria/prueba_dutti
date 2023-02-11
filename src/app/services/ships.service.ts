import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Chips } from '../interfaces/chips.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  url: string = 'https://swapi.dev/api';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*',
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {}

  getShips(): Observable<Chips> {
    return this.http.get(`${this.url}/people`).pipe(
      map((data) => {
        return data;
      })
    );
  }
  getShipsPage(page?: any): Observable<Chips> {
    console.log('entra getpage',page)
    return this.http.get(`${this.url}/people?page=${page}`).pipe(
      tap((resp) => {
        console.log('page', resp);
      }),
      map((data) => {
        return data;
      })
    );
  }


}
