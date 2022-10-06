import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FilmService } from '../film.service';

export interface IFilm {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  Date;
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       Date;
  edited:        Date;
  url:           string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList: IFilm[] = [];

  constructor(private filmService : FilmService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.filmService.getAll().subscribe((films) => this.movieList = films);
  }
}
