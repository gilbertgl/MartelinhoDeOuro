import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/Models/Veiculo';
import { VeiculosService } from 'src/app/Services/veiculos.service';

@Component({
  selector: 'app-list-veiculos',
  templateUrl: './list-veiculos.component.html',
  styleUrls: ['./list-veiculos.component.css']
})
export class ListVeiculosComponent implements OnInit {

  public veiculos: Veiculo[] = [];
  public nomeProprietario: string | null = '';
  constructor(private route: ActivatedRoute,
              private veiculosService: VeiculosService,
              private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        if (id) {
          this.veiculosService.getVeiculosByProprietarioId(id).subscribe({
            next: (response) => {
              this.veiculos = response;
              this.nomeProprietario = localStorage.getItem('Nome Proprietario');
            }
          })
        }
      }
    })
  }

  addVeiculo() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        this.router.navigate(['veiculos/add/' + id]);
      }
    })
  }

  voltar() {
    localStorage.removeItem('Nome Proprietario');
  }
}
