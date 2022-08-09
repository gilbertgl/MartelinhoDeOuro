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
    return this.http.get<Servico[]>(`${this.baseApiUrl}/servicos/${proprietarioId}`);
  }

  getServicoById(servicoId: string): Observable<Servico>{
    return this.http.get<Servico>(`${this.baseApiUrl}/servicos/servico/${servicoId}`);
  }

  post(veiculoId: string, proprietarioId: string, postServicoRequest: Servico): Observable<Servico>{
    return this.http.post<Servico>(`${this.baseApiUrl}/servicos/proprietario/${proprietarioId}/veiculo/${veiculoId}`, postServicoRequest);
  }

  put(servicoId: string, updateServicoRequest: Servico): Observable<Servico>{
    return this.http.put<Servico>(`${this.baseApiUrl}/servicos/${servicoId}`, updateServicoRequest);
  }

  delete(servicoId: string): Observable<Servico>{
    return this.http.delete<Servico>(`${this.baseApiUrl}/servicos/${servicoId}`);
  }

}
