import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(page?:string): Observable<any>{
    if(page){
      return this.http.get(`${this.url}/starships?page=${page}`).pipe( 
        map( data => { return data })
        );
    }else{
      return this.http.get(`${this.url}/starships`).pipe( 
        tap((resp=>{console.log('tap',resp)})),
        map( (data) => { return data })
        );

    }
  }

  getCharacters(): Observable<any>{
    return this.http.get(`${this.url}/people`).pipe( 
      map( data => { return data })
      );
  }



}
