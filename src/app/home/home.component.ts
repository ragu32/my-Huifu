import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/auth-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: String = null;
  closeResult: string;
  constructor(private Auth: UserAuthService, private modalService: NgbModal,
     private router: Router) {
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

}
