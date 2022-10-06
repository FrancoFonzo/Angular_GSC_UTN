import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  api = "http://api.openweathermap.org/data/2.5/weather"
  

  constructor(private http: HttpClient) { }

  getByCity(city: string): Observable<IWeather> {
    const url = this.api + "?q=" + city + "&APPID=" + this.appid;
    return this.http.get<IWeather>(url);
  }
}
