import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '../ships/ships.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent,
  children: [
    { path: 'ships', component: ShipsComponent },
    { path: '**', redirectTo: 'ships' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }