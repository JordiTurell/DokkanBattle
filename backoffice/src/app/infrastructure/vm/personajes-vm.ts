import { Injectable, inject } from '@angular/core';
import { PersonajeDto } from "@infrastructure/dto/personaje-dto";
import { TiposVM } from "./tipos-vm";
import { TipoDto } from '@infrastructure/dto/tipo-dto';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonajeVM{
  dto:PersonajeDto = {} as PersonajeDto;
  tiposvm: TiposVM = inject(TiposVM);
  opcionestipos: TipoDto[] = [] as TipoDto[];
  nivelescarta: any[] = [{ id: 1, nombre: 'N' }, { id: 2, nombre: 'R' }, { id: 3, nombre: 'SR' }, { id: 4, nombre: 'SSR' }, { id: 5, nombre: 'UR' }, { id: 6, nombre: 'LR' }];

  constructor(){

  }

  public logoNivelCarta(id:number):string{
      switch(id){
        case 1:
          return `${environment.urlimages}/level-card/n.webp`;
        case 2:
          return `${environment.urlimages}/level-card/r.webp`;
        case 3:
          return `${environment.urlimages}/level-card/sr.webp`;
        case 4:
          return `${environment.urlimages}/level-card/ssr.webp`;
        case 5:
          return `${environment.urlimages}/level-card/ur.webp`;
        case 6:
          return `${environment.urlimages}/level-card/lr.webp`;
        default:
          return '';
      }
  }

  public cargarCombos():void{
    this.tiposvm.listarTodos(()=>{
      this.opcionestipos = this.tiposvm.list;
    });
  }
}