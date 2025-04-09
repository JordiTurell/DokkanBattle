import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@core/shared/table/table.component';
import { CategoriasDto } from '@infrastructure/dto/categoria-dto';
import { CategoriasVM } from '@infrastructure/vm/categorias-vm';

@Component({
  selector: 'app-lista-categorias',
  imports: [TableComponent],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css'
})
export class ListaCategoriasComponent implements OnInit {
  router: Router = inject(Router);
  categoriasvm: CategoriasVM = inject(CategoriasVM);
  listado: CategoriasDto[] = [] as CategoriasDto[];
  constructor(){

  }

  ngOnInit(): void {
    this.categoriasvm.cargarCategorias(() => {
      this.listado = this.categoriasvm.list;
    });
  }

  
  onPageChange(page: number) {
    this.categoriasvm.onPageChange(page);
  }

  crear() {
    this.router.navigate(['/categorias/edit', 0]);
  }

  onEdit(id:number) {
    this.router.navigate([`/categorias/edit`, id]);
  }

  onDelete(id:number) {
    this.categoriasvm.onDelete(id);
  }
}
