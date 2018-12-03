import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public error: String = null;

  constructor(private Auth: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  public set user(loading) {
    this.loading = loading;
  }

  loginUser(event) {
    this.loading = true;
    this.error = null;
    event.preventDefault();
    const  target = event.target;
    const email = target.querySelector('#userEmail').value;
    const password = target.querySelector('#userPass').value;
    this.Auth.getUserAuthentication(email, password).then((response) => {
      this.loading = false;
      this.router.navigateByUrl('/');
    }).catch((error) => {
        this.error = error;
    });
  }
}
