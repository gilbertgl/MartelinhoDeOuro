import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/Models/Endereco';
import { Proprietario } from 'src/app/Models/Proprietario';
import { ProprietariosService } from 'src/app/Services/proprietarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModalComponent } from '../../modals/endereco-modal/endereco-modal.component';

@Component({
  selector: 'app-list-proprietarios',
  templateUrl: './list-proprietarios.component.html',
  styleUrls: ['./list-proprietarios.component.css']
})
export class ListProprietariosComponent implements OnInit {

  public proprietarios: Proprietario[] = [];

  constructor(private proprietariosService: ProprietariosService,
              private modal: NgbModal) { }

  ngOnInit(): void {
    this.proprietariosService.getAllProprietarios()
    .subscribe({
      next: (proprietarios) => {
        this.proprietarios = proprietarios;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  openModal(endereco: Endereco) {
    const modalRef = this.modal.open(EnderecoModalComponent, {backdrop: 'static', keyboard: false});
    modalRef.componentInstance.enderecoForm = endereco;
  }
}
