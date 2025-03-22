import { Component, OnInit } from '@angular/core';
// import { Tipo } from '../../../models/tipo';
import { Router } from '@angular/router';
// import { TiposService } from '../../../service/tipos/tipos.service';
// import { environment } from '../../../../../environments/environment';
// import { TableComponent } from '../../../components/table/table.component';
// import { FunctionsTable } from '../../../interface/functions/functions-table';
// import { Pagination } from '../../../interface/pagination';

@Component({
  selector: 'app-back-list-tipos',
  //imports: [TableComponent],
  imports:[],
  templateUrl: './back-list-tipos.component.html',
  styleUrl: './back-list-tipos.component.css'
})
export class BackListTiposComponent implements OnInit{ //, FunctionsTable, Pagination{
  // tipos: Tipo[] = [];
  // columns: any[] = [ 
  //   { title:'Id', key: 'id', type: null }, 
  //   { title:'Tipo', key: 'nombre', type: null },
  //   { title: 'Carta', key: 'pathimagen', type: 'image' },
  //   { title:'Icono Normal', key:'pathiconnormal' , type: 'image' },
  //   { title: 'Icono Super', key: 'pathiconsuper', type: 'image' },
  //   { title: 'Icono Extreme', key: '', type: null },
  //   { title: 'Acciones', key: '', type: 'acciones'}
  // ];
  // urlimage: string = environment.urlimages;

  // currentPage = 1;
  // itemsPerPage = 10;
  // totalItems = 100;
  // totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);

  // constructor(private tipoService: TiposService, private router: Router) {

  // }

  ngOnInit(): void {
  //   this.listarTipos();
  }

  // listarTipos() {
  //   this.tipoService.listarTipos().subscribe({
  //     next: (tipos) => {
  //       this.tipos = tipos.items;
  //     },
  //     error: (error) => {
  //       console.error('Error al obtener los tipos', error);
  //     },
  //     complete: () => {
  //       console.log('Tipos obtenidos correctamente');
  //     }
  //   })
  // }

  // nuevoTipo() {
  //   this.router.navigate(['/back/tipos/0']);
  // }

  // onEdit(id:number) {
  //   this.router.navigate(['/back/tipos/', id]);
  // }

  // onDelete(id:number) {
  //   this.tipoService.eliminarTipo(id).subscribe({
  //     next: () => {
  //       this.listarTipos();
  //     },
  //     error: (error) => {
  //       console.error('Error al eliminar el tipo', error);
  //     },
  //     complete: () => {
  //       console.log('Tipo eliminado correctamente');
  //     }
  //   })
  // }

  // anterior() {
  //   if(this.currentPage > 1) {
  //     this.currentPage--;
  //     this.listarTipos();
  //   }
  // }
  
  // siguiente() {
  //   if(this.currentPage < this.totalPaginas) {
  //     this.currentPage++;
  //     this.listarTipos();
  //   }
  // }

  // onClickpagina(id: number): void {
    
  // }
}
