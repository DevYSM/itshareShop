import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  
  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

}
