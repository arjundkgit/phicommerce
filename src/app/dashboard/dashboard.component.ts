import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url=''
  constructor() { }

  ngOnInit(): void {
    this.url=window.location.href.split('/').pop();
    console.log("Hi")
  }

}
