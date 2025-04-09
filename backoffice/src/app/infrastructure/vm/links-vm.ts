import { inject, Injectable } from "@angular/core";
import { LinkDescripcionDTO } from "@infrastructure/dto/link-descripcion-dto";
import { LinksDTO } from "@infrastructure/dto/links-dto";
import { LinksService } from "@infrastructure/services/links/links.service";
import { toast } from "ngx-sonner";


@Injectable({
  providedIn: 'root'
})

export class LinksVM{
  public linkdto: LinksDTO = {} as LinksDTO;
  public list = [] as LinksDTO[];
  public descripcion: LinkDescripcionDTO = {} as LinkDescripcionDTO;
  public currentPage = 1;
  public itemsPerPage = 10;
  public totalItems = 100;
  public totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);

  public columns: any[] = [ 
    { title:'Link', key: 'nombre', type: null },
    { title: 'Acciones', key: '', type: 'acciones'}
  ];

  private linkService:LinksService = inject(LinksService);

  constructor(){

  }

  listar(onSuccess:()=>void):void{
    this.linkService.listarLinks(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        if (response) {
          this.list = response.items;
          this.totalItems = response.total;
          this.totalPaginas = Math.ceil(response.total / response.limit);
          onSuccess();
        }
      },
      error: (error) => {
        toast.error('Error al obtener los links');
      },
      complete: () => {
        
      }
    });
  }

  getItem(id:number, onSuccess:()=>void):void{
    this.linkService.obtenerLink(id).subscribe({
      next: (response) => {
        if (response) {
          this.linkdto = response;
          onSuccess();
        }
      },
      error: (error) => {
        toast.error('Error al obtener el link');
      },
      complete: () => {
        
      }
    });
  }

  updateLink(onSuccess:()=>void):void{
    this.linkService.editarLink(this.linkdto).subscribe({
      next: (response) => {
        toast.success('Link actualizado correctamente.');
        onSuccess();
      },
      error: (error) => {
        toast.error('Error al actualizar el link');
      },
      complete: () => {
        toast.success('Link actualizado correctamente');
        onSuccess();
      }
    });
  }

  createLink(onSuccess:()=>void):void{
    this.linkService.nuevoLink(this.linkdto).subscribe({
      next: (response) => {
        toast.success('Link creado correctamente.');
        onSuccess();
      },
      error: (error) => {
        toast.error('Error al crear el link');
      },
      complete: () => {}
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.listar(() => {
      
    });
  }

  onDelete(id:number){
    this.linkService.eliminarLink(id).subscribe({
      next: (response) => {
        if (response) {
          this.listar(() => {
            toast.success('Link eliminado correctamente');
          });
        }
      },
      error: (error) => {
        toast.error('Error al eliminar el link');
      },
      complete: () => {
        
      }
    });

  }
}