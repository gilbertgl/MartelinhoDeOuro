import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MartelinhoDeOuro';
  imageSrc = '';
  username: string | null = '';

  constructor(private router: Router) { }

  Logout() {
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['login']);
  }

  Username() {
    this.username = localStorage.getItem('username');
  }

  IsLoggedIn() {
    this.Username();
    return localStorage.getItem('token');
  }
}
