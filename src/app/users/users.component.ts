import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service'
export interface PeriodicElement {
  userId: number;
  firstName: string;
  lastName: string;
  mobileNumber:string;
  emailId: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { userId: 1, firstName: 'Hydrogen', lastName: 'adk', mobileNumber: 'H' , emailId :'adk@gmail.com'},
  { userId: 2, firstName: 'Helium', lastName: 'otk', mobileNumber: 'He' , emailId:'otk@gmail.com'}
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'mobileNumber' , 'emailId'];
  dataSource = ELEMENT_DATA;

  url=''
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.url=window.location.href.split('/').pop();
    this.getUsers();
  }

  getUsers(){
    var url = 'phicommerce//admin/list_users';
    this.apiService.getUserData(url).subscribe(
      (data) => { 
        console.log(data)
      },
      (error) => {console.error(error);}
    );
  }

}
