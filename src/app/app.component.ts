import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-template';
  sideBarOpen = true;
  url = '';
  isAuthenticate:any=false;

  ngOnInit() { 
    this.isAuthenticated();
    this.url=window.location.href.split('/').pop();
    
  }

  async isAuthenticated() {
    this.isAuthenticate = await localStorage.getItem('isAuthenticated');
    
  }

  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
