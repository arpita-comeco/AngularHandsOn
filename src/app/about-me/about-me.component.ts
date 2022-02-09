import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  isTextShown:boolean = false;
  allClicks: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onDetailsClick() {
    // console.log('isTextShown',this.isTextShown);
    this.allClicks.push(this.allClicks.length + 1);
    this.isTextShown= !this.isTextShown;
  }
}
