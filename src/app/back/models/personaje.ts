import { Categoria } from "./categoria";
import { Links } from "./links";
import { Tipo } from "./tipo";

export interface Personaje {
  id:number;
  ps:number;
  atq:number;
  def:number;
  tipo:Tipo;
  enlacesPersonajes: Links[];
  categorias: Categoria[];
  links: number[];
  habilidadLider:string;
  superAtaque:string;
  ultraSuperAtaque:string;
  habilidadPasiva:string;
  modoReserva:string;
  nombre:string;
}
