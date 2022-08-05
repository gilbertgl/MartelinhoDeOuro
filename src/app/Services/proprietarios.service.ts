import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proprietario } from '../Models/Proprietario';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProprietarios(): Observable<Proprietario[]>{
    return this.http.get<Proprietario[]>(`${this.baseApiUrl}/proprietarios`);
  }

  addProprietario(addProprietarioRequest: Proprietario): Observable<Proprietario> {
    return this.http.post<Proprietario>(`${this.baseApiUrl}/proprietarios`, addProprietarioRequest);
  }

  getProprietario(id: string): Observable<Proprietario> {
    return this.http.get<Proprietario>(`${this.baseApiUrl}/proprietarios/${id}`);
  }

  updateProprietario(id: string, updateProprietarioRequest: Proprietario): Observable<Proprietario> {
    return this.http.put<Proprietario>(`${this.baseApiUrl}/proprietarios/${id}`, updateProprietarioRequest);
  }

  deleteProprietario(id: string): Observable<Proprietario>{
    return this.http.delete<Proprietario>(`${this.baseApiUrl}/proprietarios/${id}`);
  }
}
