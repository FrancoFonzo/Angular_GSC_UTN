import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.component.html',
  styleUrls: ['./event-location.component.css']
})
export class EventLocationComponent implements OnInit {

  @Input() location!: {address:string, city:string, country:string};

  constructor() { }

  ngOnInit(): void {
  }

}
