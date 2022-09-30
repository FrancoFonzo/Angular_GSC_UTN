import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { IEvent } from '../iEvent';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[] = [];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  getEvents(){
    return this.events;
  }

}
