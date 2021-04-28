import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  username: string="";
  isAuthenticate : any = false

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isAuthenticated();
    this.getUsername();
    var url=window.location.href;
    var selectedPath=url.split('/').pop();
    if(selectedPath === "dashboard" || selectedPath === ""){
      this.toggleSideBar();
    }

    
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  async getUsername() {
    console.log("Get User")
  }
  async logoutUser($event) {
        localStorage.removeItem('isAuthenticated');
        this.router.navigate(['/login']);
        window.location.reload()
  }
  async isAuthenticated() {
    this.isAuthenticate =await localStorage.getItem('isAuthenticated');
  }

}
