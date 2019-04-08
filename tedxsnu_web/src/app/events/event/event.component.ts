import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
  })
  export class EventComponent implements OnInit, OnChanges{

    show : boolean = false;

    @Input() event : Event;
    
    constructor() {}
    ngOnInit() {
    }

    ngOnChanges() {
      this.show = false;
    }


    onClickShow() {
      this.show = !this.show;
    }
  }