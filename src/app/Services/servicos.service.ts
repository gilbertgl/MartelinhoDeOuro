import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from '../Models/Servico';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getServicosByProprietarioId(proprietarioId: string): Observable<Servico[]>{
    return this.http.get<Servico[]>(`${this.baseApiUrl}/servicos/proprietario/${proprietarioId}`);
  }

  getServicosByVeiculoId(veiculoId: string): Observable<Servico[]>{
    return this.http.get<Servico[]>(`${this.baseApiUrl}/servicos/veiculo/${veiculoId}`);
  }

  getServicoById(servicoId: string): Observable<Servico>{
    return this.http.get<Servico>(`${this.baseApiUrl}/servicos/${servicoId}`);
  }

  post(servicoId: string, proprietarioId: string, postServicoRequest: Servico): Observable<Servico>{
    return this.http.post<Servico>(`${this.baseApiUrl}/servicos/${servicoId}/${proprietarioId}`, postServicoRequest);
  }

  put(servicoId: string, postServicoRequest: Servico): Observable<Servico>{
    return this.http.put<Servico>(`${this.baseApiUrl}/servicos/${servicoId}`, postServicoRequest);
  }

  delete(servicoId: string): Observable<Servico>{
    return this.http.delete<Servico>(`${this.baseApiUrl}/servicos/${servicoId}`);
  }

}
