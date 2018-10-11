import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map } from 'node_modules/rxjs/operators';
import { NotificationService } from '@progress/kendo-angular-notification';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  user: Observable<firebase.User>;
  authToken: any;
  private hideAfter: number = 2000;
  constructor(public fireAuth: AngularFireAuth, private notificationService: NotificationService) {
    this.user = fireAuth.authState;
  }
  public isAuthenticated = this.fireAuth.authState.pipe(map(user => user !== null));
  ngOnInit() {
   }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loginWithGoogle() {

    this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return this.fireAuth.auth.signInWithPopup(provider);
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }

  loginWithFB() {

    this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      const provider = new firebase.auth.FacebookAuthProvider();
      // In memory persistence will be applied to the signed in facebook user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return this.fireAuth.auth.signInWithPopup(provider);
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  loginWithGHub() {

    this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      const provider = new firebase.auth.GithubAuthProvider();
      // In memory persistence will be applied to the signed in github user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return this.fireAuth.auth.signInWithPopup(provider);
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  onAnonymousLogin() {
    return this.fireAuth.auth.signInAnonymously();
  }
  onAuthChanged(user) {
   return this.fireAuth.auth.onAuthStateChanged((user));
  }

  signUp(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  signIn(email, password){
   return this.fireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    })
  }
  onSignOut() {
    if (this.fireAuth.auth.currentUser) {
      // [START signout]
      this.fireAuth.auth.signOut();
      // [END signout]
    }
  }
  onSendPasswordReset(useremail){
   return this.fireAuth.auth.sendPasswordResetEmail(useremail);
  }
}