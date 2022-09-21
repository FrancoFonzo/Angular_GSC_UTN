import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childEvent = new EventEmitter<number>();

  counter = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => { this.counter++ }, 1000);
  }

  buttonClicked(): void {
    this.childEvent.emit(this.counter);
  }
}
