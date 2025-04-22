import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { environment } from '@environments/environment';


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
  @Input() totalItems :number = 0;
  @Input() totalPaginas :number = 0;


  @Output() btnedit: EventEmitter<number> = new EventEmitter<number>();
  @Output() btndelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickpagina: EventEmitter<number> = new EventEmitter<number>();
  @Output() btndetall: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeItemsPerPage: EventEmitter<number> = new EventEmitter<number>();

  constructor(){
    
  }

  onChangeItemsPerPage(event:Event){
    this.itemsPerPage.set(parseInt((event.target as HTMLInputElement).value));
    this.changeItemsPerPage.emit(this.itemsPerPage())
  }

  onEdit(id: number) {
    this.btnedit.emit(id)
  }

  onDetall(id:number){
    this.btndetall.emit(id)
  }

  onDelete(id: number) {
    this.btndelete.emit(id)
  }

  onNextPage() {
    if (this.currentPage() < this.totalPaginas) {
      this.currentPage.set(this.currentPage() + 1);
      this.clickpagina.emit(this.currentPage());
    }
  }
  
  onPreviousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
      this.clickpagina.emit(this.currentPage());
    }
  }
}
