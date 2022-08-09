import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/Models/Servico';
import { ServicosService } from 'src/app/Services/servicos.service';

@Component({
  selector: 'app-list-servicos',
  templateUrl: './list-servicos.component.html',
  styleUrls: ['./list-servicos.component.css']
})
export class ListServicosComponent implements OnInit {

  public servicos: Servico[] = [];
  public nomeCliente: string | null = ''
  constructor(private route: ActivatedRoute,
              private servicosService: ServicosService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        if (id) {
          this.servicosService.getServicosByProprietarioId(id).subscribe({
            next: (response) => {
              this.servicos = response;
              this.nomeCliente = localStorage.getItem('Nome Proprietario');
            },
            error: (erro) => {
            }
          })
        }
      }
    })
  }

  addServico() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        this.router.navigate([`servicos/add-servico/${id}`]);
      }
    })
  }

  voltar() {
    localStorage.removeItem("Nome Proprietario");
  }
}
