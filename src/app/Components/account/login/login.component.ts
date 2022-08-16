import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AuthService } from 'src/app/Services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: LoginRequest = {
    username: '',
    password: ''
  }

  constructor(private loginService: AuthService,
    private router: Router) { }

  ngOnInit() {
    localStorage.clear()
  }

  onSubmit() {
    if (this.loginForm.username != null && this.loginForm.password != null) {
      this.loginService.Login(this.loginForm).subscribe({
        next: (response) => {
          if (response != null) {
            localStorage.clear();
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', this.loginService.getId()._extractedUsername);
            localStorage.setItem('id', this.loginService.getId()._extractedId);
            alert(response.message);
            this.router.navigate(['']);
          }
        },
        error: (erro: HttpErrorResponse) => {
          alert(erro.error);
        }
      });
    }
  }
}
