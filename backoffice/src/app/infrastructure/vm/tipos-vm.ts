import { inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { TipoDto } from "@infrastructure/dto/tipo-dto";
import { TiposService } from "@infrastructure/services/tipos/tipos.service";
import { ResponseList } from "@model/responselist";
import { toast } from "ngx-sonner";

@Injectable({
  providedIn: 'root'
})

export class TiposVM{

  public tipodto = {} as TipoDto;
  public list = [] as TipoDto[];
  public currentPage = 1;
  public itemsPerPage = 10;
  public totalItems = 100;
  public totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);
  private tiposService:TiposService = inject(TiposService);
  private router = inject(Router);

  public columns: any[] = [ 
    { title:'Tipo', key: 'nombre', type: null },
    { title: 'Carta', key: 'pathimagen', type: 'image' },
    { title:'Icono Normal', key:'pathiconnormal' , type: 'image' },
    { title: 'Icono Super', key: 'pathiconsuper', type: 'image' },
    { title: 'Icono Extreme', key: '', type: null },
    { title: 'Acciones', key: '', type: 'acciones'}
  ];

  constructor(){
  }

  public listado(onSuccess:()=>void):void{
    this.tiposService.listarTipos().subscribe({
      next: (response) => {
        if (response) {
          this.list = response.items;
          this.totalItems = response.total;
          this.totalPaginas = Math.ceil(response.total / response.limit);
          onSuccess();
        }
      },
      error: (error) => {
        console.error('Error al obtener los tipos', error);
      },
      complete: () => {
        console.log('Tipos obtenidos correctamente');
      }
    });
  }

  public listarTodos():void{
    this.tiposService.listarAllTipos().subscribe({
      next: (tipos) => {
        this.list = tipos;
      },
      error: (error) => {
        console.error('Error al obtener los tipos', error);
      },
      complete: () => {
        console.log('Tipos obtenidos correctamente');
      }
    })
  }

  public nuevoTipo(tipo:TipoDto):void{
    this.tiposService.crearTipo(tipo).subscribe({
      next: (tipos) => {
        this.listado(() =>{});
      },
      error: (error) => {
        console.error('Error al crear el tipo', error);
      },
      complete: () => {
        console.log('Tipo creado correctamente');
      }
    })
  }

  onDelete(id:number) {
    this.tiposService.eliminarTipo(id).subscribe({
      next: () => {
        this.tiposService.listarTipos();
      },
      error: (error) => {
        console.error('Error al eliminar el tipo', error);
      },
      complete: () => {
        console.log('Tipo eliminado correctamente');
      }
    })
  }

  anterior() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.tiposService.listarTipos(this.currentPage, this.itemsPerPage);
    }
  }
  
  public siguiente() {
    if(this.currentPage < this.totalPaginas) {
      this.currentPage++;
      this.tiposService.listarTipos(this.currentPage, this.itemsPerPage);
    }
  }

  getItem(id:number, onSuccess:(result:boolean) =>void): void{
    if(id <= 0) {
      onSuccess(false);
      return;
    }
    this.tiposService.obtenerTipo(id).subscribe({
      next: (tipo) => {
        this.tipodto = tipo;
        onSuccess(true);
      },
      error: (error) => {
        
        onSuccess(false);
      },
      complete: () => {

      }
    });
  }
  
  setItem(edit:boolean, formTipo: FormGroup): void{
    this.tipodto = formTipo.value;
    if(formTipo.valid){
       if(edit){
         this.tiposService.actualizarTipo(this.tipodto).subscribe({
           next: () => {
             this.router.navigate(['/tipos']);
           },
           error: () => {
             console.log('Error al editar el tipo');
           }
         });
       }else{
         this.tiposService.crearTipo(this.tipodto).subscribe({
           next: () => {
             this.router.navigate(['/tipos']);
           },
           error: () => {
             console.log('Error al crear el tipo');
           }
         });
       }
     }
  }
}