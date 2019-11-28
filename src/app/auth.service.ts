import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  private url = 'albums';

  constructor(private router: Router, private httpClient: HttpClient, private userService: UserService) { }

  isLoggedIn() {
    this.isAuth = JSON.parse(localStorage.getItem('auth'));
    return this.isAuth;
  }

  logIn(user) {
        this.isAuth = true;
        this.router.navigate(['/album'])
        this.userService.setUser(user);
        localStorage.setItem('auth','true');

  }
/*   logIn(user, cb) {
  
    console.log(user);
    this.httpClient.post(this.url +'/log', user).subscribe(
      (status) => {
        if(status) {
          this.isAuth = true  ;
          this.router.navigate(['/album'])
          
          this.userService.setUser(user);
        } else {
          cb("Identifiants incorrects")
        }

      },
      (err) => cb("Identifiants incorrects")
    );
  
  } */

  logOut() {
    this.isAuth = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);

  }
}

