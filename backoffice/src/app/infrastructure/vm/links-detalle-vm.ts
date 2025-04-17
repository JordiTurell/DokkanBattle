import { inject, Injectable } from "@angular/core";
import { LinkDescripcionDTO } from "@infrastructure/dto/link-descripcion-dto";
import { LinkDescriptionService } from "@infrastructure/services/link-description/link-description.service";
import { toast } from "ngx-sonner";

@Injectable({
  providedIn: 'root'
})
export class LinksDetalleVM{
  public linkdetalle: LinkDescripcionDTO = {} as LinkDescripcionDTO;
  public list: LinkDescripcionDTO[] = [] as LinkDescripcionDTO[];
  public currentPage = 1;
  public itemsPerPage = 10;
  public totalItems = 100;
  public totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);
  
  public columns: any[] = [ 
    { title:'Link', key: 'descripcion', type: null },
    { title: 'Acciones', key: '', type: 'acciones', details: false}
  ];

  private linkDescripcionService: LinkDescriptionService = inject(LinkDescriptionService);

  constructor(){

  }

  public listar(onSuccess:()=>void):void{
    this.linkDescripcionService.listar(this.currentPage, this.itemsPerPage, this.linkdetalle.idlink).subscribe({
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
        toast.success('Lista de links cargada correctamente');
      }
    });
  }

  public obtenerLink(id:number, onSuccess:()=>void):void{
    this.linkDescripcionService.obtener(id).subscribe({
      next: (response) => {
        if (response) {
          this.linkdetalle = response;
          onSuccess();
        }
      },
      error: (error) => {
        toast.error('Error al obtener el link');
      },
      complete: () => {
        toast.success('Link obtenido correctamente');
      }
    });
  }

  public getItem(id:number, onSuccess:()=>void):void{
    this.linkDescripcionService.obtener(id).subscribe({
      next: (response) => {
        if (response) {
          this.linkdetalle = response;
          onSuccess();
        }
      },
      error: (error) => {
        toast.error('Error al obtener el link');
      },
      complete: () => {
        toast.success('Link obtenido correctamente');
      }
    });
  }

  public onDelete(id: number, onSuccess: () => void): void {
    this.linkDescripcionService.eliminar(id).subscribe({
      next: (response) => {
        if (response) {
          toast.success('Link eliminado correctamente');
          this.listar(onSuccess);
        }
      },
      error: (error) => {
        toast.error('Error al eliminar el link');
      },
      complete: () => {
        toast.success('Link eliminado correctamente');
      }
    });
  }

  public nuevo(onSuccess:()=>void):void{
    this.linkDescripcionService.nuevo(this.linkdetalle).subscribe({
      next: (response) => {
        toast.success('Link creado correctamente.');
        this.listar(onSuccess);
      },
      error: (error) => {
        toast.error('Error al crear el link');
      },
      complete: () => {
        toast.success('Link creado correctamente');
        onSuccess();
      }
    });
  }

  public editar(onSuccess:()=>void):void{
    this.linkDescripcionService.editar(this.linkdetalle).subscribe({
      next: (response) => {
        toast.success('Link actualizado correctamente.');
        this.listar(onSuccess);
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

  public onChangeItemsPerPage(onSuccess:()=>void):void{
    this.listar(onSuccess);
  }

  public onClickPagina(onSuccess:()=>void):void{
    this.listar(onSuccess);
  }
}