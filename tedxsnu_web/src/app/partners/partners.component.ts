import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  sponsors = [
    {title: "TEDxSNU 2018 Fall Event", path: "images/2018_fall_sponsor.jpeg"},
    {title: "TEDxSNU 2019 SUMMER Event", path: "images/tedxsnu2019summer.png"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
