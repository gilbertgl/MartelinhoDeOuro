import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Veiculo } from '../Models/Veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getVeiculosByProprietarioId(proprietarioId: string): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(`${this.baseApiUrl}/veiculos/${proprietarioId}`);
  }

  getVeiculo(veiculoId: string): Observable<Veiculo>{
    return this.http.get<Veiculo>(`${this.baseApiUrl}/veiculos/veiculo/${veiculoId}`);
  }

  post(proprietarioId: string, postVeiculoRequest: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(`${this.baseApiUrl}/veiculos/${proprietarioId}`, postVeiculoRequest);
  }

  put(veiculoId: string, postVeiculoRequest: Veiculo): Observable<Veiculo>{
    return this.http.put<Veiculo>(`${this.baseApiUrl}/veiculos/${veiculoId}`, postVeiculoRequest);
  }

  delete(veiculoId: string): Observable<Veiculo>{
    return this.http.delete<Veiculo>(`${this.baseApiUrl}/veiculos/${veiculoId}`);
  }

}
