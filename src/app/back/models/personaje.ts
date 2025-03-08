import { Categoria } from "./categoria";
import { Links } from "./links";
import { Tipo } from "./tipo";

export interface Personaje {
  id:number;
  idnivelcarta: number;
  titulo: string;
  habilidadLider: string;
  fechaSalida: Date;
  fechaEza: Date;
  eza: boolean;
}
