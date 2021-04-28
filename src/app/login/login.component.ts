import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isAuthenticated: any = false;
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  signInForm: any;
  constructor(private router: Router,private apiService: ApiService,private formBuilder: FormBuilder,) { }

  async ngOnInit() {
    this.username='';
    this.password='';
    this.isAuthenticated = localStorage.getItem('isAuthenticated')
  }

  onSubmit(): void {
    if(environment.mode === "dev" && this.loginForm.valid){
      localStorage.setItem('isAuthenticated', 'local');
      this.router.navigate(['/dashboard']);
      window.location.reload();
    }else{
      console.log("try authenticating the user against backend");
    this.apiService.login(this.loginForm.value['username'], this.loginForm.value['password']).subscribe(
      (data) => { 
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', data['access-token']);
        localStorage.setItem('username', this.username);
        // this.router.navigate(['/dashboard']);
      },
      (error) => {console.error(error);}
    );
    }
  }

  async logoutUser($event) {
        localStorage.setItem('isAuthenticated', 'false');
  }

  // show(){
  //     console.log(this.loginForm.value);
  //     if(this.loginForm.valid){
  //     this.router.navigateByUrl('/dashboard');
  //   }
  // }

}
