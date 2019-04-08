import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  openHamburger : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.openHamburger = false;
  }

  onToggleHamburger() {
    this.openHamburger = !this.openHamburger;
  }

}
