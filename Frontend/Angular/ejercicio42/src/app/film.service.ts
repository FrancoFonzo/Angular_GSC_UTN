import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IFilm } from './parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url: string = "https://swapi.dev/api/films";

  constructor(private http: HttpClient) { }

  getAll(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.url)
          .pipe(
            map((resp: any) => resp.results)
          );
  }
}
