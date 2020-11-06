
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

  wishLat: number;
  wishLng: number;

  siegLat: number;
  siegLng: number;

  crownLat: number;
  crownLng: number;

  styles = [{
    elementType: 'labels.icon',
    stylers: [{visibility: 'off'}]
  }];

  markers: any;

  constructor() {}

  public ngOnInit(): void{
    this.lat = 41.836010;
    this.lng = -87.626266;

    this.kaplanLat = 41.836929;
    this.kaplanLng = -87.628891;

    this.msvLat = 41.835529;
    this.msvLng = -87.624321;

    this.wishLat = 41.835390;
    this.wishLng = -87.627730;

    this.siegLat = 41.834650;
    this.siegLng = -87.627720;

    this.crownLat = 41.833569;
    this.crownLng = -87.626808;

  }
}
