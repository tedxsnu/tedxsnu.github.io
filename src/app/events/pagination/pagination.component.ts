import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  shown_num : number = 8;
  event_ids : number[] = [];
  @Input() event_numbers : number = 16;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var i : number = 1;
    for( ; i<=this.shown_num; i++ ) {
      this.event_ids.push(i);
      if(i==this.event_numbers) {
        break;
      }
    }
  }

  onClickPrev() {
    var first = this.event_ids[0];
    if(first>1) {
      this.event_ids = this.event_ids.slice(0,0);
      var i = 1;
      for( ; i<=this.shown_num; i++) {
        this.event_ids.push(first-this.shown_num-1+i);
      }

      this.router.navigate(['events', this.event_ids[0]]);

    }
  }

  onClickNext() {
    var last = this.event_ids[this.event_ids.length-1];
    if(last < this.event_numbers) {
      // TODO : any other way to clear the array?
      this.event_ids = this.event_ids.slice(0,0);
      var i = 1;
      for( ; i<=this.shown_num; i++ ) {
        this.event_ids.push(last+i);
        if((last+i)==this.event_numbers) {
          break;
        }
      }

      this.router.navigate(['events', this.event_ids[0]]);

    }
  }

}
