import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];
//Environment
import { environment } from '../environments/environment';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LoginComponent } from './views/login/login.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService, AuthGuard, ChallengeService, PostService } from '@app/services';
import { NotificationComponent,  ShowAuthedDirective } from '@app/shared';
import { NotificationModule } from '@progress/kendo-angular-notification';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    InputsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    // To initialize AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    NotificationModule
    
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotificationComponent,
    ShowAuthedDirective,
    


  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  AuthService, 
  AuthGuard,
  ChallengeService,
  PostService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
