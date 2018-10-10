import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@app/services'
import * as firebase from 'firebase/app';
import * as $ from 'jquery';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  loggedIn = false;
  userObj: any;

  useremail: string;
  password: string;
  private hideAfter: number = 2000;
  constructor(public authServ: AuthService, private notificationService: NotificationService, private router: Router) {

  }

  ngOnInit() {
     this.authChanged();
  }

  onGLogin() {

    this.authServ.loginWithGoogle();

  }

  onFBLogin() {
    this.authServ.loginWithFB();
  }

  onSignUp() {
    debugger;
    if (this.useremail === undefined || this.password === undefined) {
      this.notificationService.show({
        content: 'User name and password are mandatory!',
        animation: { type: 'fade', duration: 400 },
        position: { horizontal: 'right', vertical: 'top' },
        type: { style: 'error', icon: true },
        hideAfter: this.hideAfter
      });
    } else if (this.useremail.length < 4) {
      this.notificationService.show({
        content: 'Invalid Email address entered!',
        animation: { type: 'fade', duration: 400 },
        position: { horizontal: 'right', vertical: 'top' },
        type: { style: 'error', icon: true },
        hideAfter: this.hideAfter
      });
      return;
    } else if (this.password.length < 4) {
      this.notificationService.show({
        content: 'Invalid password entered!',
        animation: { type: 'fade', duration: 400 },
        position: { horizontal: 'right', vertical: 'top' },
        type: { style: 'error', icon: true },
        hideAfter: this.hideAfter
      });
      return;
    } else {
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(this.useremail, this.password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/weak-password') {
          this.notificationService.show({
            content: 'Password entered is too weak!',
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'right', vertical: 'top' },
            type: { style: 'error', icon: true },
            hideAfter: this.hideAfter
          });
        } else {
          this.notificationService.show({
            content: 'Error during signup',
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'right', vertical: 'top' },
            type: { style: 'error', icon: true },
            hideAfter: this.hideAfter
          });
        }
        console.log(error);
      });
    }
  }

  onSignIn() {
   
      if (this.useremail === undefined) {
        this.notificationService.show({
          content: 'Please enter valid user name!',
          animation: { type: 'fade', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'error', icon: true },
          hideAfter: this.hideAfter
        });
        return;
      } else if (this.password === undefined) {
        this.notificationService.show({
          content: 'Please enter valid password!',
          animation: { type: 'fade', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'error', icon: true },
          hideAfter: this.hideAfter
        });
        return;
      }
      const email = this.useremail;
      const pass = this.password;
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, pass);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        this.notificationService.show({
          content: 'Error during Login',
          animation: { type: 'fade', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'error', icon: true },
          hideAfter: this.hideAfter
        });
      });
      // [END authwithemail]

    // document.getElementById('quickstart-sign-in').disabled = true;
  }
  onSignOut(){
    if (firebase.auth().currentUser) {
      // [START signout]
        firebase.auth().signOut();
      // [END signout]
    }
  }
  onGHubLogin() {
    this.authServ.loginWithGHub();

  }

  authChanged() {

    firebase.auth().onAuthStateChanged((user) => {
        // [START_EXCLUDE silent]
     // document.getElementById('quickstart-verify-email').disabled = true;
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // [START_EXCLUDE]
        this.loggedIn = true;
        if (!emailVerified) {
          
        }
        this.notificationService.show({
          content: 'Welcome to the board!!',
          animation: { type: 'fade', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'success', icon: true },
          hideAfter: this.hideAfter
        });
        this.router.navigate(['/'])
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // [START_EXCLUDE]
        this.loggedIn = false;
        this.notificationService.show({
          content: 'We will miss you!!',
          animation: { type: 'fade', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'success', icon: true },
          hideAfter: this.hideAfter
        });
        this.router.navigate(['/login'])
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE silent]
      
      // [END_EXCLUDE]
    });
  }

  onSendPasswordReset() {

      firebase.auth().sendPasswordResetEmail(this.useremail).then(() => {
        this.notificationService.show({
          content: 'Email sent with instructions. Please follow',
          animation: { type: 'fade', duration: 400 },
          position: { horizontal: 'right', vertical: 'top' },
          type: { style: 'info', icon: true },
          hideAfter: this.hideAfter
        });
        // [END_EXCLUDE]
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/invalid-email') {
          this.notificationService.show({
            content: 'Invalid Email Id provided!',
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'right', vertical: 'top' },
            type: { style: 'error', icon: true },
            hideAfter: this.hideAfter
          });

        } else if (errorCode === 'auth/user-not-found') {
          if (errorCode === 'auth/invalid-email') {
            this.notificationService.show({
              content: 'Sorry. User not found.',
              animation: { type: 'fade', duration: 400 },
              position: { horizontal: 'right', vertical: 'top' },
              type: { style: 'error', icon: true },
              hideAfter: this.hideAfter
            });
        } else {
          if (errorCode === 'auth/invalid-email') {
            this.notificationService.show({
              content: 'Error during password reset',
              animation: { type: 'fade', duration: 400 },
              position: { horizontal: 'right', vertical: 'top' },
              type: { style: 'error', icon: true },
              hideAfter: this.hideAfter
            });
        }
      }
    }

      });
  }




}