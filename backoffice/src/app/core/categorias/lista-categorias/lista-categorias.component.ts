import { Component, OnInit } from '@angular/core';
// import { Categoria } from '../../../models/categoria';
// import { CategoriasService } from '../../../service/categorias/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-categorias',
  imports: [],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css'
})
export class ListaCategoriasComponent implements OnInit {
  // categorias: Categoria[] = [];
  // currentPage = 1;
  // itemsPerPage = 10;
  // totalItems = 0;
  // totalPaginas = 0;

  // constructor(private categoriasService: CategoriasService, private router: Router) {

  // }

  ngOnInit(): void {
  //   this.cargarCategorias();
  }

  // cargarCategorias() {
  //   this.categoriasService.listarCategorias(this.currentPage, this.itemsPerPage)
  //     .subscribe({
  //       next: (response) => {
  //         this.categorias = response.items;
  //         this.totalItems = response.total;
  //         Math.ceil(this.totalItems / this.itemsPerPage)
          
  //       },
  //       error: (error) => {
  //         console.error('Error al cargar categorías:', error);
  //       }
  //     });
  // }

  // onPageChange(page: number) {
  //   this.currentPage = page;
  //   this.cargarCategorias();
  // }

  // crear() {
  //   this.router.navigate(['/back/categorias/0']);
  // }

  // editar(item: any) {
  //   this.router.navigate([`/back/categorias/${item.id}`]);
  // }

  // eliminar(item: any) {
  //   this.categoriasService.deleteCategoria(item.id).subscribe({
  //     next: (response) => {
  //       this.categorias = this.categorias.filter(c => c.id !== item.id);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //     }
  //   })
  // }
}
