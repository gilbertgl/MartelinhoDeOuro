import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AuthService } from 'src/app/Services/login/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  // public account = {
  //   username: '',
  //   password: '',
  //   image: ''
  // }

  account = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    photo: new FormControl('', [Validators.required]),
  });
  imageSrc: string = '';

  constructor(private loginService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  get f() {
    return this.account.controls;
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        const trim = this.imageSrc.split(',')[1]

        this.account.patchValue({
          photo: trim
        });
      };
    }
  }

  onSubmit() {
    this.loginService.createAccount(this.account.value).subscribe({
      next: (response) => {
        alert(response.message)
        this.router.navigate([''])
      },
      error: (erro: HttpErrorResponse) => {
        alert(erro.error);
      }
    });
    // console.log(this.account.controls.photo.value)
  }
}
