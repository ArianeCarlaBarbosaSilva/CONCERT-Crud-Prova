import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from './user';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false
  showMenuEmitter = new EventEmitter<boolean>()

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  doLogin(user: User): void {

    if(user.name === 'concert' && user.password === 'prova') {

      this.userAuth = true;
      this.router.navigate(['/home'])

    } else {

      this.userAuth = false;
      this.snackBar.open('Acesso negado!', 'X', {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: ['msg-error']
      })

    }
    //user.name = ''
    //user.password = ''
  }
}
