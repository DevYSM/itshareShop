import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";
import {  Observable } from "rxjs";
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AngularFireAuth]
})
export class NavbarComponent   {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState
  }

 

  logout() {
    this.afAuth.auth.signOut();
  }

}
