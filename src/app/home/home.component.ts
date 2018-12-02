import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: String = null
  constructor(private Auth: AuthServiceService) { 
    this.currentUser = localStorage.getItem('currentUser')
  }

  ngOnInit() {
  }

  logoutUser() {
    this.Auth.userLogOut()
  }
}
