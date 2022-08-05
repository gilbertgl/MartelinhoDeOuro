import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servico } from 'src/app/Models/Servico';
import { ServicosService } from 'src/app/Services/servicos.service';

@Component({
  selector: 'app-list-servicos',
  templateUrl: './list-servicos.component.html',
  styleUrls: ['./list-servicos.component.css']
})
export class ListServicosComponent implements OnInit {

  public servicos: Servico[] = [];
  constructor(private route: ActivatedRoute,
              private servicosService: ServicosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        if (id) {
          this.servicosService.getServicosByProprietarioId(id).subscribe({
            next: (response) => {
              this.servicos = response;
            },
            error: (erro) => {
            }
          })
        }
      }
    })
  }

  addServico() {

  }
}
