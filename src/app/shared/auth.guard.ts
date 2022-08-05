import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../Services/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: AuthService,
              private router: Router) { }

  canActivate() {
    if(this.loginService.IsLoggedIn())
    return true

  this.router.navigate(['login'])
  return false;
  }

}
