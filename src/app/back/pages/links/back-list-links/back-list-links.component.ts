import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinksService } from '../../../service/links/links.service';
import { Links } from '../../../models/links';

@Component({
  selector: 'app-back-list-links',
  imports: [],
  templateUrl: './back-list-links.component.html',
  styleUrl: './back-list-links.component.css'
})
export class BackListLinksComponent {
  links!: Links[];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPaginas = 0;

  constructor(private linkService: LinksService, private router: Router) {

  }

  ngOnInit(): void {
    this.listarLinks();
  }

  listarLinks() {
    this.linkService.listarLinks(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.links = response.items;
        this.totalItems = response.total;
        this.totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completado');
      }
    });
  }

  nuevoLink() {
    this.router.navigate(['/back/links/0']);
  }

  editar(id: number) {
    this.router.navigate(['/back/links/' + id]);
  }

  eliminar(id: number) {
    this.linkService.eliminarLink(id).subscribe({
      next: (response) => {
        this.listarLinks();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Eliminado');
      }
    })
  }

  verNiveles(id: number) {
    this.router.navigate(['/back/links/niveles/' + id]);
  }

  anterior() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.listarLinks();
    }
  }
  
  siguiente() {
    if(this.currentPage < this.totalPaginas) {
      this.currentPage++;
      this.listarLinks();
    }
  }
}
