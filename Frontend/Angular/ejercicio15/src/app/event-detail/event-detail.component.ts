import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { IEvent } from '../iEvent';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: IEvent | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getOne(id);
  }

  returnToEvents(): void{
    this.router.navigate(["/events"]);
  }

}
