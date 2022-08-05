import { Endereco } from "./Endereco";
import { Veiculo } from "./Veiculo";


export interface Proprietario {
  id: string;
  nome: string;
  cpf: string;
  rg: string;
  email: string;
  telefone: string;
  veiculos: Veiculo[];
  endereco: Endereco;
}
