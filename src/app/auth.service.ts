import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;

  constructor(private router: Router, private httpClient: HttpClient) { }

  isLoggedIn() {
    return this.isAuth;
  }

  logIn(user, cb) {
    this.isAuth = true;
    this.router.navigate(['/album'])
    console.log(user);
/*     
    this.httpClient.post('/api/users', user).subscribe(
      () => {
        this.isAuth = true;
        this.router.navigate(['/album'])
      },
      () => cb("Identifiants incorrects")
    ); */

  }

  logOut() {
    this.isAuth = false;
    this.router.navigate(['/login']);

  }
}
