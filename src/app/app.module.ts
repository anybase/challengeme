import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    HeaderComponent,
    FooterComponent,


  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
