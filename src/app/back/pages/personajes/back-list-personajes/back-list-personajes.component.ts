import { Component } from '@angular/core';
import { Personaje } from '../../../models/personaje';
import { PersonajeService } from '../../../service/personaje/personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-list-personajes',
  imports: [],
  templateUrl: './back-list-personajes.component.html',
  styleUrl: './back-list-personajes.component.css'
})
export class BackListPersonajesComponent {
  personajes: Personaje[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;

  constructor(private personajesService: PersonajeService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.personajesService.listarPersonajes(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response) => {
          this.personajes = response.items;
          this.totalItems = response.total;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.cargarPersonajes();
  }

  crear() {
    this.router.navigate(['/back/personajes/0']);
  }

  editar(item: any) {
    this.router.navigate([`/back/personajes/${item.id}`]);
  }

  eliminar(item: any) {
    
  }
}
