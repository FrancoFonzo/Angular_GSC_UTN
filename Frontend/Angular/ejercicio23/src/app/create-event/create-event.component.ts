import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

	formEvent = this.formBuilder.group({
		name: "",
		date: "",
		time: "",
		location: this.formBuilder.group({
       address: "",
       city: "",
       country: "" 
    })
	}); 

  constructor(private eventService: EventService, private router: Router, private formBuilder: FormBuilder) { }

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
