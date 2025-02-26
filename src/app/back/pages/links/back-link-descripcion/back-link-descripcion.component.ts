import { Component, OnInit } from '@angular/core';
import { LinkDescripcion } from '../../../models/link-descripcion';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkDescriptionService } from '../../../service/link-description/link-description.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-back-link-descripcion',
  imports: [ReactiveFormsModule],
  templateUrl: './back-link-descripcion.component.html',
  styleUrl: './back-link-descripcion.component.css'
})
export class BackLinkDescripcionComponent implements OnInit{
  niveles!: LinkDescripcion[];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPaginas = 0;
  idlink: number = 0;
  isedit: boolean = false;
  nivel!: LinkDescripcion;
  form: FormGroup;

  constructor(private linkDescripcionService: LinkDescriptionService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required],
      idlink: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.idlink = this.route.snapshot.params['id'];
    this.cargarLista();    
  }

  cargarLista() {
    this.linkDescripcionService.listar(this.currentPage, this.itemsPerPage, this.idlink).subscribe({
      next: (response) => {
         this.niveles = response.items;
         this.totalItems = response.total;
         this.totalPaginas = Math.ceil(this.totalItems / this.itemsPerPage);
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log('completado') }
    })
  }

  anterior() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.cargarLista();
    }
  }

  siguiente() {
    if(this.currentPage < this.totalPaginas) {
      this.currentPage++;
      this.cargarLista();
    }
  }

  nuevo() {
    this.nivel = {
      id: 0,
      descripcion: this.form.value.descripcion,
      idlink: this.idlink
    }
    this.linkDescripcionService.nuevo(this.nivel).subscribe({
      next: (response) => {
        this.cargarLista();
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log('completado') }
    })
  }

  edit(){
    this.nivel.descripcion = this.form.value.descripcion;
    this.nivel.idlink = this.form.value.idlink;
    
    this.linkDescripcionService.editar(this.nivel).subscribe({
      next: (response) => {
        this.form.reset();
        this.cargarLista();
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log('completado') }
    })
  }

  editar(id: number) {
    this.isedit = true;
    this.linkDescripcionService.obtener(id).subscribe({
      next: (response) => {
        this.nivel = response;
        this.form.patchValue({
          descripcion: this.nivel.descripcion,
          idlink: this.nivel.idlink
        });
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log('completado') }
    })
  }

  eliminar(id: number) {
    this.linkDescripcionService.eliminar(id).subscribe({
      next: (response) => {
        this.cargarLista();
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log('completado') }
    })
  }
  
}
