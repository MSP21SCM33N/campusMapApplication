
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  lat: number;
  lng: number;

  icon: object;

  msvLat: number;
  msvLng: number;

  kaplanLat: number;
  kaplanLng: number;

  markers: any;

  constructor() {}

  public ngOnInit(): void{
    this.lat = 41.836010;
    this.lng = -87.626266;

    this.kaplanLat = 41.836929;
    this.kaplanLng = -87.628891;

  }
}
