import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProprietariosComponent } from './Components/proprietarios/list-proprietarios/list-proprietarios.component';
import { AddProprietariosComponent } from './Components/proprietarios/add-proprietarios/add-proprietarios.component';
import { EditProprietariosComponent } from './Components/proprietarios/edit-proprietarios/edit-proprietarios.component';
import { HomeComponent } from './Components/layout/home/home.component';
import { AuthenticationComponent } from './Components/layout/authentication/authentication.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Components/account/login/login.component';
import { TokenInterceptorService } from './Services/login/token-interceptor.service';
import { ListVeiculosComponent } from './Components/veiculos/list-veiculos/list-veiculos.component';
import { AddVeiculosComponent } from './Components/veiculos/add-veiculos/add-veiculos.component';
import { EditVeiculosComponent } from './Components/veiculos/edit-veiculos/edit-veiculos.component';
import { ListServicosComponent } from './Components/servicos/list-servicos/list-servicos.component';
import { AddServicosComponent } from './Components/servicos/add-servicos/add-servicos.component';
import { EditServicosComponent } from './Components/servicos/edit-servicos/edit-servicos.component';
import { CreateAccountComponent } from './Components/account/create-account/create-account.component';
import { EnderecoModalComponent } from './Components/modals/endereco-modal/endereco-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FotoPerfilComponent } from './Components/modals/foto-perfil/foto-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProprietariosComponent,
    AddProprietariosComponent,
    EditProprietariosComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    ListVeiculosComponent,
    AddVeiculosComponent,
    EditVeiculosComponent,
    ListServicosComponent,
    AddServicosComponent,
    EditServicosComponent,
    CreateAccountComponent,
    EnderecoModalComponent,
    FotoPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
