import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { User } from '../../../shared/user';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  title = 'Album Dumbledore'
  isAuth: boolean = false;
  date: Date;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.date = new Date;
    this.userService.getUser().subscribe((user) => { this.user = user });
    this.isAuth = this.authService.isLoggedIn();
  }

  onLogOut() {
    this.authService.logOut();
    this.isAuth = this.authService.isLoggedIn();
  }

}
