import { Injectable } from '@angular/core';
import usersList from 'src/assets/json/users.json';
import { AuthUser } from './interfaces/auth.interfaces';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private auth: Auth) {}

  login({ email, password }: AuthUser) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      (resp: any) => localStorage.setItem('token', resp.user.accessToken)
    );
  }

  register({ email, password }: AuthUser) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser() {
    return authState(this.auth);
  }
}
