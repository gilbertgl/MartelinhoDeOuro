import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/login/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private loginService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    const url = this.router.url.split('?')[1]
    const array = url.split('&');
    const userId = array[0].replace('userId=', '')
    const validationToken = array[1].replace('token=', '')

    if (userId != null && validationToken != null) {
      this.verifyEmail(userId, validationToken);
    }
  }

  verifyEmail(userId: string, validationToken: string) {
    this.loginService.EmailVerify(userId, validationToken).subscribe({
      next: (response) => {
        this.TokenLogin(userId, validationToken);
      },
      error: (erro: HttpErrorResponse) => {
        alert(erro.message);
        // this.router.navigate(['']);
      }
    });
  }

  TokenLogin(userId: string, validationToken: string) {
    this.loginService.TokenLogin(userId, validationToken).subscribe({
      next: (response) => {
        if (response) {
          localStorage.clear();
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', this.loginService.getId()._extractedUsername);
            localStorage.setItem('id', userId);
            alert(response.message);
            this.router.navigate(['']);
        }
      },
      error: (erro: HttpErrorResponse) => {
        alert(erro.error);
        // this.router.navigate(['']);
      }
    });
  }
}
