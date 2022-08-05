import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/Models/Veiculo';
import { VeiculosService } from 'src/app/Services/veiculos.service';

@Component({
  selector: 'app-edit-veiculos',
  templateUrl: './edit-veiculos.component.html',
  styleUrls: ['./edit-veiculos.component.css']
})
export class EditVeiculosComponent implements OnInit {

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
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('veiculoId');

        if (id) {
          this.veiculosService.getVeiculo(id).subscribe({
            next: (response) => {
              this.veiculoForm = response;
            }
          })
        }
      }
    })
  }

  updateVeiculo() {
    this.veiculosService.put(this.veiculoForm.id, this.veiculoForm).subscribe({
      next: (response) => {
        this.router.navigate([`veiculos/${this.veiculoForm.proprietarioId}`]);
      }
    });
  }

  deletarVeiculo(id: string) {
    this.veiculosService.delete(id).subscribe({
      next: (response) => {
        this.router.navigate([`veiculos/${this.veiculoForm.proprietarioId}`]);
      }
    })
  }

  voltar() {
    this.router.navigate([`veiculos/${this.veiculoForm.proprietarioId}`]);
  }
}
