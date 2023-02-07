import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss'],
})
export class ShipsDetailsComponent implements OnInit {
  @Input() dataList: any;
  config: any;
  shipId: string = '';
  imgUrl: string = 'https://starwars-visualguide.com/assets/img/starships';
  imgError: string =
    'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  url: string = 'https://starwars-visualguide.com/assets/img/starships/9.jpg';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  manufacturer: string = '';
  cost_in_credits: string = '';
  max_atmosphering_speed: string = '';
  hyperdrive_rating: string = '';
  MGLT: string = '';
  length: string = '';
  cargo_capacity: string = '';
  passengers: string = '';

  constructor() {}

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.length,
    };
  }

  getStarshipId(url) {
    if (url) {
      this.shipId = url.slice(-2, -1);
      const urlImage = `${this.imgUrl}/${this.shipId}.jpg`;
      console.log('img', urlImage);
      return urlImage;
    }
    return '';
  }

  pageChanged(event) {
    this.config.currentPage = event;
    console.log('get', this.getStarshipId(this.url));
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
    this.manufacturer = details.manufacturer;
    this.cost_in_credits = details.cost_in_credits;
    this.max_atmosphering_speed = details.max_atmosphering_speed;
    this.hyperdrive_rating = details.hyperdrive_rating;
    this.MGLT = details.MGLT;
    this.length = details.length;
    this.cargo_capacity = details.cargo_capacity;
    this.passengers = details.passengers;
  }
}
