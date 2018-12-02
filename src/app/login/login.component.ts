import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false


  constructor(private Auth: AuthServiceService) {
   }

  ngOnInit() {
  }

  public set user(loading) {
    this.loading = loading
  }

  loginUser(event){
    this.loading = true
    event.preventDefault()
    const  target = event.target
    const email = target.querySelector('#userEmail').value
    const password = target.querySelector('#userPass').value
    this.Auth.getUserAuthentication(email, password)
  }
}
