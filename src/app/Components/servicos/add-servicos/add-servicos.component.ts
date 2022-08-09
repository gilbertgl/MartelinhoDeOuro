import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/Models/Servico';
import { Veiculo } from 'src/app/Models/Veiculo';
import { ServicosService } from 'src/app/Services/servicos.service';
import { VeiculosService } from 'src/app/Services/veiculos.service';

@Component({
  selector: 'app-add-servicos',
  templateUrl: './add-servicos.component.html',
  styleUrls: ['./add-servicos.component.css']
})
export class AddServicosComponent implements OnInit {

  public servicoForm: Servico = {
    id: '00000000-0000-0000-0000-000000000000',
    proprietarioId: '00000000-0000-0000-0000-000000000000',
    veiculoId: '00000000-0000-0000-0000-000000000000',
    valor: 0,
    descricao: '',
    veiculo: {
      id: '00000000-0000-0000-0000-000000000000',
      proprietarioId: '00000000-0000-0000-0000-000000000000',
      nome: '',
      modelo: '',
      ano: '',
      cor: '',
      placa: ''
    },
    proprietario: {
      id: '00000000-0000-0000-0000-000000000000',
      nome: '',
      cpf: '',
      rg: '',
      email: '',
      telefone: '',
      veiculos: [
        {
          id: '00000000-0000-0000-0000-000000000000',
          proprietarioId: '00000000-0000-0000-0000-000000000000',
          nome: '',
          modelo: '',
          ano: '',
          cor: '',
          placa: ''
        }
      ],
      endereco: {
        id: '00000000-0000-0000-0000-000000000000',
        proprietarioId: '00000000-0000-0000-0000-000000000000',
        logradouro: '',
        numero: 0,
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: ''
      }
    }
  }
  public propId: string = '';
  public veicId: string = '';
  public veiculoSelecionado: string = 'Selecione um veiculo';
  public veiculos: Veiculo[] = [];
  constructor(private route: ActivatedRoute,
    private servicosService: ServicosService,
    private veiculosService: VeiculosService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        if (id) {
          this.propId = id;
          this.veiculosService.getVeiculosByProprietarioId(id).subscribe({
            next: (response) => {
              this.veiculos = response;
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

        if (id) {
          this.propId = id;
          this.servicosService.post(this.veicId, id, this.servicoForm).subscribe({
            next: (response) => {
              this.router.navigate([`servicos/proprietario/${this.propId}`]);
            },
            error: (erro) => {
              console.log(erro);
            }
          })
        }
      }
    })
  }

  getVeiculoInfo(id: string, nome: string) {
    this.veicId = id;
    this.veiculoSelecionado = nome;
  }

  voltar() {
    this.router.navigate([`servicos/proprietario/${this.propId}`]);
  }
}
