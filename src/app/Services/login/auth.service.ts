import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from 'src/app/Models/Photo';
import { Token } from 'src/app/Models/Token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  Login(user: any) {
    return this.http.post<Token>(`${this.baseApiUrl}/auth/login`, user);
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
    var _extractedToken = this.GetToken().split('.')[1];
    var _atobData = atob(_extractedToken);
    var _extractedRole = _atobData.split('"')[11];
    if (_extractedRole == 'admin')
      return true;
    alert('Acesso Negado.')
    return false;
  }

  getId() {
    var _extractedToken = this.GetToken().split('.')[1];
    var _atobData = atob(_extractedToken);
    var _extractedRole = _atobData.split('"')[3];
    return _extractedRole;
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

  getPhoto(userId: string) {
    return this.http.get<Photo>(`${this.baseApiUrl}/auth/photo/${userId}`);
  }
}
