import { Component, OnInit } from '@angular/core';
import { Tipo } from '../../../models/tipo';
import { Router } from '@angular/router';
import { TiposService } from '../../../service/tipos/tipos.service';
import { environment } from '../../../../../environments/environment';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-back-list-tipos',
  imports: [TableComponent],
  templateUrl: './back-list-tipos.component.html',
  styleUrl: './back-list-tipos.component.css'
})
export class BackListTiposComponent implements OnInit{
  tipos: Tipo[] = [];
  columns: string[] = ['Id', 'Tipo', 'Icono Normal', 'Icono Super', 'Icono Extreme', 'Acciones'];
  urlimage: string = environment.urlimages;

  constructor(private tipoService: TiposService, private router: Router) {

  }

  ngOnInit(): void {
    this.listarTipos();
  }

  listarTipos() {
    this.tipoService.listarTipos().subscribe({
      next: (tipos) => {
        this.tipos = tipos.items;
      },
      error: (error) => {
        console.error('Error al obtener los tipos', error);
      },
      complete: () => {
        console.log('Tipos obtenidos correctamente');
      }
    })
  }

  nuevoTipo() {
    this.router.navigate(['/back/tipos/0']);
  }

  editar(id:number) {
    this.router.navigate(['/back/tipos/', id]);
  }

  eliminar(id:number) {
    this.tipoService.eliminarTipo(id).subscribe({
      next: () => {
        this.listarTipos();
      },
      error: (error) => {
        console.error('Error al eliminar el tipo', error);
      },
      complete: () => {
        console.log('Tipo eliminado correctamente');
      }
    })
  }
}
