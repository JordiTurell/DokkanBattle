import { Component, inject, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TableComponent } from '@core/shared/table/table.component';
import { environment } from '@environments/environment';
import { TipoDto } from '@infrastructure/dto/tipo-dto';
import { TiposService } from '@infrastructure/services/tipos/tipos.service';
import { TiposVM } from '@infrastructure/vm/tipos-vm';

@Component({
  selector: 'app-back-list-tipos',
  imports: [TableComponent],
  templateUrl: './back-list-tipos.component.html',
  styleUrl: './back-list-tipos.component.css'
})
export class BackListTiposComponent implements OnInit{ //, FunctionsTable, Pagination{
  tipos: TipoDto[] = [];
  public tipoVM:TiposVM = inject(TiposVM);
  urlimage: string = environment.urlimages;
 
  router:Router = inject(Router);
  
  constructor() {

  }

  ngOnInit(): void {
    this.tipoVM.listado(() => {  
        this.tipos = this.tipoVM.list;
        console.log(this.tipos);      
    });
  }

  nuevoTipo() {
    this.router.navigate(['tipos/edit/0']);
  }

  onEdit(id:number) {
    this.router.navigate(['tipos/edit/', id]);
  }

  onDelete(id:number) 
  {
    this.tipoVM.onDelete(id);
  }
}
