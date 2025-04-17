import { inject, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@core/shared/table/table.component';
import { environment } from '@environments/environment';
import { IconoDto } from '@infrastructure/dto/icono-dto';
import { IconoVM } from '@infrastructure/vm/iconos-vm';

@Component({
  selector: 'app-lista-iconos',
  imports: [TableComponent],
  templateUrl: './lista-iconos.component.html',
  styleUrl: './lista-iconos.component.css'
})
export class ListaIconosComponent implements OnInit {
  iconos: IconoDto[] = []
  apiimage: string = environment.urlimages
  apiicon: string = environment.urlicon
  
  router: Router = inject(Router);
  iconosVM: IconoVM = inject(IconoVM);
  
  constructor() {

  }

  ngOnInit(): void {
    this.iconosVM.listado(() => {
      
    });
  }

  crear(){
    this.router.navigate(['/iconos/create'])
  }

  onEdit(id:number){
    this.router.navigate(['/iconos/edit', id])

  }
  onDelete(id:number){
    this.iconosVM.onDelete(id)
  }

  onChangeItemsPerPage(items:number) {
    this.iconosVM.itemsPerPage = items;
    this.iconosVM.onChangeItemsPerPage(() => {
      this.iconosVM.listado(() => { });
    });
  }

  onClickPagina(pagina:number){
    this.iconosVM.currentPage = pagina;
    this.iconosVM.onClickPagina(() => {
      this.iconosVM.listado(() => { });
    });
  }
}
