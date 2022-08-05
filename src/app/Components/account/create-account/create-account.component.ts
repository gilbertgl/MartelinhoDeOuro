import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AuthService } from 'src/app/Services/login/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public account: LoginRequest = {
    username: '',
    password: '',
  }

  constructor(private loginService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.createAccount(this.account).subscribe(response => {
      this.router.navigate([''])
    },
      error => {
        console.error(error);
      });
  }
}
