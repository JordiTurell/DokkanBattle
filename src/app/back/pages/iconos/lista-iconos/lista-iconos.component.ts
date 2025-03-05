import { Component } from '@angular/core';
import { Icono } from '../../../models/icono';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-lista-iconos',
  imports: [],
  templateUrl: './lista-iconos.component.html',
  styleUrl: './lista-iconos.component.css'
})
export class ListaIconosComponent {
  iconos!: [Icono]
  apiimage: string = environment.urlimages

  constructor(){

  }

  crear(){

  }


}
