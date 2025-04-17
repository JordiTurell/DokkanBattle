import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@core/shared/table/table.component';
import { LinksVM } from '@infrastructure/vm/links-vm';

@Component({
  selector: 'app-back-list-links',
  imports: [TableComponent],
  templateUrl: './back-list-links.component.html',
  styleUrl: './back-list-links.component.css'
})
export class BackListLinksComponent implements OnInit {
  
  linksvm:LinksVM = inject(LinksVM);
  router:Router = inject(Router);

  constructor() {

  }

  ngOnInit(): void {
    this.linksvm.listar(() => {
      
    });
  }

  nuevoLink() {
    this.router.navigate(['/links/create']);
  }

  onEdit(id: number) {
    this.router.navigate(['/links/edit', id]);
  }

  onDelete(id: number) {
    this.linksvm.onDelete(id)
  }

  onDetall(id: number) {
    this.router.navigate(['/links/detall', id]);
  }

  onChangeItemsPerPage(items:number) {
    this.linksvm.itemsPerPage = items;
    this.linksvm.onChangeItemsPerPage(() => {
      this.linksvm.listar(() => { });
    });
  }

  onClickPagina(pagina:number){
    this.linksvm.currentPage = pagina;
    this.linksvm.onClickPagina(() => {
      this.linksvm.listar(() => { });
    });
  }

  verNiveles(id: number) {
    this.router.navigate(['/links/niveles/', id]);
  }
}
