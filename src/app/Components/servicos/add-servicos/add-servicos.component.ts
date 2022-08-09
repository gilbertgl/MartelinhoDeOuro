import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/Models/Servico';
import { ServicosService } from 'src/app/Services/servicos.service';

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
  constructor(private route: ActivatedRoute,
    private servicosService: ServicosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addServico() {

  }

  voltar() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('proprietarioId');

        this.router.navigate([`servicos/proprietario/${id}`]);
      }
    })
  }
}
