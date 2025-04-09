import { inject, Injectable } from "@angular/core";
import { IconoDto } from "@infrastructure/dto/icono-dto";
import { IconosService } from '@infrastructure/services/iconos/iconos.service';
import { toast } from "ngx-sonner";

@Injectable({
  providedIn: 'root'
})

export class IconoVM{
  public iconodto: IconoDto = {} as IconoDto;
  public list: IconoDto[] = [] as IconoDto[];
  public currentPage = 1;
  public itemsPerPage = 10;
  public totalItems = 100;
  public totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);
  private iconosService: IconosService = inject(IconosService);
  
  public columns: any[] = [ 
    { title: 'Icono', key: 'pathicon', type: 'icono' },
    { title: 'Acciones', key: '', type: 'acciones'}
  ];

  constructor(){

  }

  public listado(onSuccess:()=>void):void{
    this.iconosService.listar().subscribe({
      next: (response) => {
        if (response) {
          this.list = response.items;
          this.totalItems = response.total;
          this.totalPaginas = Math.ceil(response.total / response.limit);
          onSuccess();
        }
      },
      error: (error) => {
        toast.error('Error al obtener los iconos')
      },
      complete: () => {
        
      }
    });
  }

  public nuevo(icono:IconoDto):void{
    
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.listado(() => {
      
    });
  }

  public onDelete(id:number):void{
    this.iconosService.eliminar(id).subscribe({
      next: (response) => {
        if (response) {
          this.listado(() => {});
          toast.success('Icono eliminado correctamente')
        }
      },
      error: (error) => {
        console.error('Error al eliminar el icono', error);
        toast.error('Error al eliminar el icono')
      },
      complete: () => {
        
      }
    });
  }

  updateFile(formData: FormData, onSuccess:()=>void):void{
    this.iconosService.updateIcon(formData).subscribe((response) => {
      onSuccess();
    })
  }
}