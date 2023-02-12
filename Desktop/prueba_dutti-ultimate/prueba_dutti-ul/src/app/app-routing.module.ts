import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './components/auth/pages/login/login.component';
import { RegisterComponent } from './components/auth/pages/register/register.component';
import { AuthGuard } from './components/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then( m => m.AuthModule )
  },
  { path: 'principal', loadChildren: () => import(`./components/principal/principal.module`).then(m => m.PrincipalModule),
  canLoad: [AuthGuard],
  canActivate: [ AuthGuard ]  },
  {
    path: '**',
    redirectTo: 'principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
