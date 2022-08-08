import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/Models/Endereco';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-endereco-modal',
  templateUrl: './endereco-modal.component.html',
  styleUrls: ['./endereco-modal.component.css']
})
export class EnderecoModalComponent implements OnInit {

  public enderecoForm: Endereco = {
    id: '',
    proprietarioId: '',
    logradouro: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  }

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.dismissAll();
  }
}
