import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output: string[] = [];
  
  constructor() {
    this.subject = new Subject();
  }

  ngOnInit(): void {
    this.subject
    .pipe(map((k: any) => k.toUpperCase()))
    .subscribe((key: any) => this.output.push(key));
  }

  keypress(e: any): void {
    this.subject.next(e.key);
  }
  
}

