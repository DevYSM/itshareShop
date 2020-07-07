import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  // Inject AngularFireAuth Class 
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

}
