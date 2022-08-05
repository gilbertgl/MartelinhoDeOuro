import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private inject: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginService = this.inject.get(AuthService);
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + loginService.GetToken()
      }
    });
    return next.handle(jwtToken);
  }

}
