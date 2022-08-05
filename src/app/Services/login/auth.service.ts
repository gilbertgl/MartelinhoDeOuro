import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  Login(user: any) {
    return this.http.post(`${this.baseApiUrl}/auth/login`, user, { responseType: 'text'});
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') || '';
  }

  HaveAccess() {
    var logginToken = localStorage.getItem('token') || '';
    var _extractedToken = logginToken.split('.')[1];
    var _atobData = atob(_extractedToken);
    var _extractedRole = _atobData.split('"')[7];
    if (_extractedRole == 'admin')
      return true;
    alert('Acesso Negado.')
    return false;
  }

  createAccount(account: any) {
    return this.http.post(`${this.baseApiUrl}/auth/register`, account);
  }
}
