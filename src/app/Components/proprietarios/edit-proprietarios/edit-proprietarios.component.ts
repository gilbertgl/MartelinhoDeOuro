import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietario } from 'src/app/Models/Proprietario';
import { ProprietariosService } from 'src/app/Services/proprietarios.service';

@Component({
  selector: 'app-edit-proprietarios',
  templateUrl: './edit-proprietarios.component.html',
  styleUrls: ['./edit-proprietarios.component.css']
})
export class EditProprietariosComponent implements OnInit {

  detailsProprietarios: Proprietario = {
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
  };

  constructor(private route: ActivatedRoute,
              private proprietariosService: ProprietariosService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.proprietariosService.getProprietario(id).subscribe({
            next: (response) => {
              this.detailsProprietarios = response;
            }
          })
        }
      },
      error: (erro) => {

      }
    })
  }

  updateProprietario() {
    this.proprietariosService.updateProprietario(this.detailsProprietarios.id, this.detailsProprietarios).subscribe({
      next: (response) => {
        this.router.navigate([''])
      }
    });
  }

  deleteProprietario(id: string) {
    this.proprietariosService.deleteProprietario(id).subscribe({
      next: (response) => {
        this.router.navigate([''])
      }
    })
  }

  voltar() {
    this.router.navigate([''])
  }

}
