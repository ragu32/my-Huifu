import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/auth-service';
import { Router } from '@angular/router';
import {
  AuthService,
  LinkedinLoginProvider
} from 'angular-6-social-login';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public error: String = null;

  constructor(private Auth: UserAuthService, private router: Router,
    private socialAuthService: AuthService) {
   }

  ngOnInit() {
  }

  public set user(loading) {
    this.loading = loading;
  }

  public socialSignIn(socialPlatform: string) {
    this.loading = true;
    let socialPlatformProvider;
    if (socialPlatform === 'linkedin') {
        socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
      }

    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    ).catch((error) => {
      console.log('error :' + error);
    });
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
        console.log('error :' + error);
    });
  }
}
