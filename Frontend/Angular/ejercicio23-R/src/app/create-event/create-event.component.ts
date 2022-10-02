import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

	formEvent = this.formBuilder.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required, Validators.pattern('[A-Z]{2}')]],
    })
  }); 

  constructor(private eventService: EventService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  onSubmit(): void{
    this.eventService.saveEvent(this.formEvent.value);
    this.router.navigate(["/events"]);
  }

  isValid(field: string): boolean | undefined {
    return this.formEvent.get(field)?.invalid &&
           this.formEvent.get(field)?.touched;
  }
}
