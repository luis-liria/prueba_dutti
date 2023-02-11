import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarStarships } from 'src/app/store/actions/starships.actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  loading: boolean = false
  dataList: any = [];
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('starschips').subscribe(({ loading }) => {
      this.loading = loading
     
    });
    this.store.dispatch( cargarStarships() );
    
  }
}
