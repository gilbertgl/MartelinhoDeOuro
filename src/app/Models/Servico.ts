import { Proprietario } from "./Proprietario";
import { Veiculo } from "./Veiculo";

export interface Servico {
  id: string;
  valor: number;
  veiculoId: string;
  veiculo: Veiculo;
  proprietarioId: string;
  proprietario: Proprietario;
  descricao: string;
}
