import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proprietario } from 'src/app/Models/Proprietario';
import { ProprietariosService } from 'src/app/Services/proprietarios.service';

@Component({
  selector: 'app-add-proprietarios',
  templateUrl: './add-proprietarios.component.html',
  styleUrls: ['./add-proprietarios.component.css']
})
export class AddProprietariosComponent implements OnInit {

  public addProprietarioRequest: Proprietario = {
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
        nome : '',
        modelo : '',
        ano : '',
        cor : '',
        placa: ''
      }
    ],
    endereco:{
      id: '00000000-0000-0000-0000-000000000000',
      proprietarioId: '00000000-0000-0000-0000-000000000000',
      logradouro: '',
      numero: 0,
      complemento:'',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  }

  constructor(private proprietariosService: ProprietariosService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addProprietario() {
    this.proprietariosService.addProprietario
    (this.addProprietarioRequest).subscribe({
      next: (proprietario) => {
        this.router.navigate(['']);
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }

  voltar() {
    this.router.navigate(['']);
  }
}
