import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  url='';
  constructor() { }

  ngOnInit(): void {
    this.url=window.location.href.split('/').pop();
  }

}
