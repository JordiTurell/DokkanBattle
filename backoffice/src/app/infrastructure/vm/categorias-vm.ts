import { inject, Injectable } from "@angular/core";
import { CategoriasDto } from "@infrastructure/dto/categoria-dto";
import { CategoriasService } from '../services/categorias/categorias.service';
import { toast } from "ngx-sonner";

@Injectable({
  providedIn: 'root'
})

export class CategoriasVM {
  public categoriadto: CategoriasDto = {} as CategoriasDto;
  public list = [] as CategoriasDto[];
  public currentPage = 1;
  public itemsPerPage = 10;
  public totalItems = 0;
  public totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);
  private categoriasService: CategoriasService = inject(CategoriasService);
  public columns: any[] = [ 
    { title:'Nombre', key: 'nombre', type: null },
    { title: 'Acciones', key: '', type: 'acciones'}
  ];

  cargarCategorias(onSuccess:()=>void) {
    this.categoriasService.listarCategorias(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response) => {
          this.list = response.items;
          this.totalItems = response.total;
          Math.ceil(this.totalItems / this.itemsPerPage)
          onSuccess();
        },
        error: (error) => {
          toast.error('No se pudo cargar la lista de categorías. Intente nuevamente más tarde.');
        }
      });
  }

  getItem(id:number, onSuccess:()=>void){
    this.categoriasService.obtenerCategoria(id).subscribe({
      next: (response) => {
        this.categoriadto = response;
        onSuccess();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
      }
    })
  }

  updateCategoria(onSuccess:()=>void){
    this.categoriasService.updateCategoria(this.categoriadto).subscribe({
      next: (response) => {
        toast.success('Categoría actualizada correctamente.');
        onSuccess();
      },
      error: (err) => {
        toast.error('No se pudo actualizar la categoría. Intente nuevamente más tarde.');
      }
    })
  }

  createCategoria(onSuccess:()=>void){
    this.categoriasService.createCategoria(this.categoriadto).subscribe({
      next: (response) => {
        toast.success('Categoría creada correctamente.');
        onSuccess();
      },
      error: (err) => {
        toast.error('No se pudo crear la categoría. Intente nuevamente más tarde.');
      }
    })
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.cargarCategorias(() => {
      
    });
  }

  onDelete(id:number) {
    this.categoriasService.deleteCategoria(id).subscribe({
      next: () => {
        toast.success('Categoría eliminada correctamente.');
        this.cargarCategorias(() => {});
      },
      error: (error) => {
        toast.error('No se pudo eliminar la categoría. Intente nuevamente más tarde.');
      }
    });
  }
}