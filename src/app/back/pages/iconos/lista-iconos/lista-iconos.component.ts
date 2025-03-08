import { Component, OnInit } from '@angular/core';
import { Icono } from '../../../models/icono';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';
import { IconosService } from '../../../service/iconos/iconos.service';

@Component({
  selector: 'app-lista-iconos',
  imports: [],
  templateUrl: './lista-iconos.component.html',
  styleUrl: './lista-iconos.component.css'
})
export class ListaIconosComponent implements OnInit {
  iconos: Icono[] = []
  apiimage: string = environment.urlimages
  apiicon: string = environment.urlicon
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPaginas = 0;

  constructor(private router: Router, private iconosService: IconosService){

  }

  ngOnInit(): void {
    this.cargarIconos()
  }

  cargarIconos(){
    this.iconosService.listar(this.currentPage, this.itemsPerPage).subscribe({
      next:(response) =>{
        this.iconos = response.items
        this.totalItems = response.total
        Math.ceil(this.totalItems / this.itemsPerPage)
      },
      error:(err) => {

      },
      complete: () => { }
    })
  }

  crear(){
    this.router.navigate(['/back/iconos/0'])
  }

  editar(item:Icono){

  }

  eliminar(item:Icono){
    this.iconosService.eliminar(item.id).subscribe({
      next:(response) => {
        this.cargarIconos()
      },
      error:(err) => {

      },
      complete: () => { }
    })
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.cargarIconos();
  }
}
