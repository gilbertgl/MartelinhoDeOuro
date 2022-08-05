import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private loginService: AuthService,
              private router: Router) { }

  canActivate(): boolean {
    if(this.loginService.HaveAccess()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
