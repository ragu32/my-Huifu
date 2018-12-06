import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/auth-service';
import { Router, NavigationExtras } from '@angular/router';
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
  public loginError: String = null;

  constructor(private Auth: UserAuthService, private router: Router,
    private socialAuthService: AuthService) {
   }

  ngOnInit() {
  }

  public set user(loading) {
    this.loading = loading;
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'linkedin') {
        socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
      }

    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        this.loading = false;
        this.router.navigate(['app-home']);
      }
    ).catch((error) => {
      this.loginError = error;
      console.log('error :' + error);
    });
  }

  loginUser(event) {
    this.loading = true;
    this.loginError = null;
    event.preventDefault();
    const  target = event.target;
    const email = target.querySelector('#userEmail').value;
    const password = target.querySelector('#userPass').value;
    this.Auth.getUserAuthentication(email, password).then((response) => {
      this.loading = false;
      const navigationExtras: NavigationExtras = {
        queryParams: {
            'email': response.user.email,
            'displayName': response.user.displayName
        }
    };
      this.router.navigate(['/']);
    }).catch((error) => {
        this.loading = false;
        this.loginError = error;
        console.log('error :' + error);
    });
  }
}
