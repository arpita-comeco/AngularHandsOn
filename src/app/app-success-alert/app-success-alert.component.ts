import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-success-alert',
  // templateUrl: './app-success-alert.component.html',
  template: `<p>This is a Success-alert-comp!</p>`,
  styleUrls: ['./app-success-alert.component.css']
})
export class AppSuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
