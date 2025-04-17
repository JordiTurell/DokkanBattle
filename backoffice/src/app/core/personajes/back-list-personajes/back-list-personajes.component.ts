import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-list-personajes',
  imports: [],
  templateUrl: './back-list-personajes.component.html',
  styleUrl: './back-list-personajes.component.css'
})
export class BackListPersonajesComponent implements OnInit{
  router: Router = inject(Router);

  constructor() {

  }

  ngOnInit(): void {
  
  }

  crear() {
    this.router.navigate(['/personajes/create']);
  }

  onEdit(id: number) {
    this.router.navigate(['/personajes/edit', id]);
  }
}
