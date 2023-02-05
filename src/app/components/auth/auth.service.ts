import { Injectable } from '@angular/core';
import usersList from 'src/assets/json/users.json';
import { Auth } from './interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: Array<Auth> = usersList;
  constructor() { }

  login():Array<Auth> {
    return this.users
  }
}
