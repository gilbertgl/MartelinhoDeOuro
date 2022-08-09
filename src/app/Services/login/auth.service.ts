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
    return this.http.post(`${this.baseApiUrl}/auth/login`, user, { responseType: 'text' });
  }

  IsLoggedIn() {
    if (this.GetToken() != '') {
      if (!this.tokenExpired())
        return true;
    }
    localStorage.clear();
    return false;
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

  private tokenExpired() {
    var _extractedToken = this.GetToken().split('.')[1];
    var _atobData = atob(_extractedToken);
    const expiry = (JSON.parse(_atobData)).exp;
    if ((Math.floor((new Date).getTime() / 1000)) >= expiry) {
      alert('Sua sessão expirou. Por favor, faça login novamente!')
      return true;
    }
    return false
  }

  createAccount(account: any) {
    return this.http.post(`${this.baseApiUrl}/auth/register`, account);
  }
}
