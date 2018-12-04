import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserAuthService } from '../service/auth-service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
