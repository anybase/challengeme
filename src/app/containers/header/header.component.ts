import { Component, OnInit } from '@angular/core';
import {AuthService} from '@app/services'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.onSignOut();
  }
}
