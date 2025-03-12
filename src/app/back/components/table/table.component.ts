import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  @Input() columnas: string[] = [];
  @Input() data: any[] = [];
  @Input() page: number = 1;
  @Input() pageSize: number = 10;


  constructor(){

  }

  get paginatedData() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data.slice(start, end);
  }
}
