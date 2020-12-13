import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    
    this.authService.doLogin(this.user)

  }

}
