import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;

  constructor(private router: Router) { }

  isLoggedIn() {
    return this.isAuth;
  }

  logIn() {
    this.isAuth = true;
  }

  logOut() {
    this.isAuth = false;
    this.router.navigate(['/album']);

  }
}
