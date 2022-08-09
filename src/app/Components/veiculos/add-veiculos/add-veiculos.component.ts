import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/Models/Veiculo';
import { VeiculosService } from 'src/app/Services/veiculos.service';

@Component({
  selector: 'app-add-veiculos',
  templateUrl: './add-veiculos.component.html',
  styleUrls: ['./add-veiculos.component.css']
})
export class AddVeiculosComponent implements OnInit {

  public veiculoForm: Veiculo = {
    id: '00000000-0000-0000-0000-000000000000',
    proprietarioId: '00000000-0000-0000-0000-000000000000',
    nome: '',
    modelo: '',
    ano: '',
    cor: '',
    placa: ''
  }
  constructor(private route: ActivatedRoute,
              private veiculosService: VeiculosService,
              private router: Router) { }

  ngOnInit(): void {

  }

  addVeiculo() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        if (id) {
          this.veiculosService.post(id, this.veiculoForm).subscribe({
            next: (response) => {
              this.router.navigate([`veiculos/${id}`]);
            },
            error: (erro) => {
              console.log(erro);
            }
          })
        }
      }
    })
  }

  voltar() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        this.router.navigate([`veiculos/${id}`]);
      }
    })
  }
}
