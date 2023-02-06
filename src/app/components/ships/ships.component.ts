import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
loading: boolean = false
  public dataList: any = [];

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.loading = true
    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results)
      console.log(ships)
      this.loading = false
    })
  }
}
