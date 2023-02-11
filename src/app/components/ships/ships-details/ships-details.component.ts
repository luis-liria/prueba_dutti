import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chips, config } from 'src/app/interfaces/chips.interfaces';
import { cargarStarshipsPage } from 'src/app/store/actions/starships.actions';
import { AppState } from 'src/app/store/app.reducers';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss'],
})
export class ShipsDetailsComponent implements OnInit {
  imgUrl: string = 'https://starwars-visualguide.com/assets/img/characters';
  dataList: Chips;
  loading: boolean = false;
  error: any;
  config: config;
  shipId: string = '';
  page: number = 1;
  url: string = '';
  birthYear: string = '';
  height: string = '';
  mass: string = '';
  gender: string = '';
  hairColor: string = '';
  skinColor: string = '';
  name: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('starschips').subscribe(({ starships, loading }) => {
      this.dataList = starships;
      this.loading = loading;
      this.config = {
        itemsPerPage: this.dataList?.results.length,
        currentPage: this.page,
        totalItems: this.dataList?.count,
      };
      console.log('config', this.config);
    });
  }

  getStarshipId(url) {
    if (url) {
      let urlLength = url.substring(0, url.length - 1);
      let urlLast = urlLength.lastIndexOf('/');
      let urlCharacter = urlLength.length - urlLast - 1;
      let urlId = urlLength.slice(-urlCharacter);
      const urlImage = `${this.imgUrl}/${urlId}.jpg`;

      return urlImage;
    }
    return '';
  }

  pageChanged(page) {
    this.page = page;
    this.store.dispatch(cargarStarshipsPage({ page }));
    this.config.currentPage = this.page;
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.birthYear = details.birth_year;
    this.height = details.height;
    this.mass = details.mass;
    this.gender = details.gender;
    this.hairColor = details.hair_color;
    this.skinColor = details.skin_color;
    this.name = details.name;
    this.url = details.url;
  }
}
