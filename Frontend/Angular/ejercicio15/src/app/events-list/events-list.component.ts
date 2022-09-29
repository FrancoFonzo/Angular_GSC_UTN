import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: {
      name: string;
      date: string;
      time: string;
      location: {
          address: string;
          city: string;
          country: string;
      }}[] = []; //TODO: Add IEvents -> events: IEvents[]

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  getEvents(){
    return this.events;
  }

}
