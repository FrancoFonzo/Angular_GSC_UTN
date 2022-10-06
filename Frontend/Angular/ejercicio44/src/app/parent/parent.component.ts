import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IWeather } from '../interfaces';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  
  forecast!: IWeather;
  city!: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.weatherService.getByCity(this.city).subscribe((r) => this.forecast = r);
  }

}

