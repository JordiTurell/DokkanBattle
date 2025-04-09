import { Component, Input, OnInit, Output, EventEmitter, signal, computed, effect } from '@angular/core';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  @Input() columnas: any[] = [];
  @Input() data: any[] = [];
  itemsPerPage = signal(25);
  urlimage: string = environment.urlimages;
  apiicon: string = environment.urlicon;

  // Signals para la paginación
  currentPage = signal(1);
  totalItems = computed(() => this.data.length);
  totalPaginas = signal(0);

  @Output() btnedit: EventEmitter<number> = new EventEmitter<number>();
  @Output() btndelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickpagina: EventEmitter<number> = new EventEmitter<number>();

  constructor(){
    effect(() => {
      this.totalPaginas.set(Math.ceil(this.data.length / this.itemsPerPage()));
    });
  }

  changeItemsPerPage(event:Event){
    this.itemsPerPage.set(parseInt((event.target as HTMLInputElement).value));
  }

  onEdit(id: number) {
    this.btnedit.emit(id)
  }

  onDelete(id: number) {
    this.btndelete.emit(id)
  }

  onClickpagina(id:number){
    this.clickpagina.emit(id)
  }
}
