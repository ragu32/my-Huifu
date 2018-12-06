import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/auth-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: String = null;
  closeResult: string;
  email: any;
  displayName: String;

  constructor(private Auth: UserAuthService, private modalService: NgbModal,
     private router: Router, private route: ActivatedRoute) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
  }

  logoutUser() {
    this.Auth.userLogOut().then((response) => {
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.log('error :' + error);
    });
  }

}
