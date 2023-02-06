import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService : AuthService,private router: Router,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let user :boolean
    this.authService.getCurrentUser().subscribe(resp=>{
      if(resp){
        user = true
      }else{
        this.router.navigate(['/auth/login'])
        user = false

      }
    })
    return user
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    let user :boolean
    this.authService.getCurrentUser().subscribe(resp=>{
      if(resp){
        user = true
      }else{
        this.router.navigate(['/auth/login'])
        user = false

      }
    })
    return user
  }
}
