import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './Components/account/create-account/create-account.component';
import { LoginComponent } from './Components/account/login/login.component';
import { AuthenticationComponent } from './Components/layout/authentication/authentication.component';
import { HomeComponent } from './Components/layout/home/home.component';
import { AddProprietariosComponent } from './Components/proprietarios/add-proprietarios/add-proprietarios.component';
import { EditProprietariosComponent } from './Components/proprietarios/edit-proprietarios/edit-proprietarios.component';
import { ListProprietariosComponent } from './Components/proprietarios/list-proprietarios/list-proprietarios.component';
import { AddServicosComponent } from './Components/servicos/add-servicos/add-servicos.component';
import { EditServicosComponent } from './Components/servicos/edit-servicos/edit-servicos.component';
import { ListServicosComponent } from './Components/servicos/list-servicos/list-servicos.component';
import { AddVeiculosComponent } from './Components/veiculos/add-veiculos/add-veiculos.component';
import { EditVeiculosComponent } from './Components/veiculos/edit-veiculos/edit-veiculos.component';
import { ListVeiculosComponent } from './Components/veiculos/list-veiculos/list-veiculos.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListProprietariosComponent
      },
      {
        path: 'proprietarios/add',
        component: AddProprietariosComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'proprietarios/edit/:id',
        component: EditProprietariosComponent,
        canActivate: [RoleGuard]
      },
    ],
    canActivate: [AuthGuard]
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
    ]
  },

  {
    path: 'veiculos/:proprietarioId',
    component: ListVeiculosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'veiculos/add/:proprietarioId',
    component: AddVeiculosComponent,
    canActivate: [RoleGuard]
  },
  {
    path: 'veiculos/edit/:veiculoId',
    component: EditVeiculosComponent,
    canActivate: [RoleGuard]
  },

  {
    path: 'servicos/proprietario/:proprietarioId',
    component: ListServicosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicos/add-servico-by-proprietario/:proprietarioId/:veiculoId',
    component: AddServicosComponent,
    canActivate: [RoleGuard]
  },
  {
    path: 'servicos/edit-by-proprietario/:id',
    component: EditServicosComponent,
    canActivate: [RoleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
