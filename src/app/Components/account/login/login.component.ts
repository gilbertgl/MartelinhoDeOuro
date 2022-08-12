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
  }

  onSubmit() {
    if (this.loginForm.username != null && this.loginForm.password != null) {
      this.loginService.Login(this.loginForm).subscribe(response => {
        if(response != null){
          localStorage.clear();
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', this.loginForm.username);
          localStorage.setItem('id', this.loginService.getId());
          this.router.navigate(['']);
        }
      },
      error => {
        console.log(error.status)
        alert("Usuario não existe ou senha está incorreta");
      });
    }
  }
}
