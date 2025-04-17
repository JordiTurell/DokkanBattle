import { Injectable } from "@angular/core";
import { PersonajeDto } from "@infrastructure/dto/personaje-dto";

@Injectable({
  providedIn: 'root'
})

export class PersonajeVM{
  dto:PersonajeDto = {} as PersonajeDto;
}