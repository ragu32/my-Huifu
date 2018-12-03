import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseAuth } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: FirebaseAuth = null;
  constructor(private http: HttpClient, private angularFireAuth: AngularFireAuth) {
    }

    registerUser(userEmail, password) {
      // return new Promise((resolve, reject) => {
      //   this.angularFireAuth.auth
      //   .createUserWithEmailAndPassword(userEmail, password)
      //   .then(userData => resolve(userData), error => reject(error));
      // });

      this.angularFireAuth.auth
      .createUserWithEmailAndPassword(userEmail, password)
      .then((response) => {
        console.log('success :' + response);
      }
      ). catch((error) => {
        console.log(error);
      });
    }
  getUserAuthentication(userEmail, password) {
     return this.angularFireAuth.auth
    .signInWithEmailAndPassword(userEmail, password)
    .then((response => {
      // this.http.post('http://localhost:8080/api', {
      //   response
      // }).subscribe(loginResponse =>
      //   console.log("logi success:" + JSON.stringify(loginResponse)))
      localStorage.setItem('currentUser', response.user.email);
      console.log('logi success:' + JSON.stringify(response));
      // this.loginComp.user(false)
      return response;
    })).catch((error) => {
      console.log('error logging in :' + error);
      return error;
    });
  }

  userLogOut() {
    return this.angularFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('currentUser');
      //this.router.navigateByUrl('/login');
    }
    ).catch((error) => {
      console.log('log out failed :' + error);
    });
  }

}
