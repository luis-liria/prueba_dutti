import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
  
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class PrincipalModule { }