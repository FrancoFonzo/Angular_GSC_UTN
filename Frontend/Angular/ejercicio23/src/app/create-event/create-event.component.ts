import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  formEvent = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    location: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    }),
  });

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  onSubmit(){
    this.eventService.saveEvent(this.formEvent.value);
    this.router.navigate(["/events"]);
  }
}
