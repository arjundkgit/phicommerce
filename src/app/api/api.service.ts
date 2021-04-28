import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {throwError} from "rxjs";
import {finalize, catchError} from "rxjs/operators";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl = environment.apiUrl;
  httpTokenOptions = {};

  constructor(private http: HttpClient, private router: Router) { }

  getHttpOptions() {
    let httpTokenOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return httpTokenOptions;
  
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
 }
 showLoader() {
  (<HTMLElement>document.querySelector("#loader")).style.display = "block";
}
hideLoader() {
  (<HTMLElement>document.querySelector("#loader")).style.display = "none";
}
login(username, password) {
  // this.showLoader();
  let body = {};
  let options = {};
  let url = this.serverUrl + "phicommerce/admin/login?" + "username=" + username + "&password=" + password;
  return this.http.post(url, body, options ).pipe(
    finalize( () => console.log("Done")),
    catchError(this.handleError)
  );

}

getUserData(url) {
  // this.showLoader();
  let body = {};
  let options = this.getHttpOptions();
  let Url = this.serverUrl + url;
  return this.http.get(Url,  options).pipe(
    finalize( () => console.log("Done")),
    catchError(this.handleError)
  );

}

}
