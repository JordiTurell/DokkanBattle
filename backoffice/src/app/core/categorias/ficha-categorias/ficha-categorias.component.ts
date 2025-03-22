import { Component } from '@angular/core';
// import { Categoria } from '../../../models/categoria';
// import { CategoriasService } from '../../../service/categorias/categorias.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha-categorias',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './ficha-categorias.component.html',
  styleUrl: './ficha-categorias.component.css'
})
export class FichaCategoriasComponent {
  // isedit:boolean = false;
  // categoria!:Categoria;
  // formCategoria: FormGroup;
  
  // constructor(private categoriaService: CategoriasService, private router: Router, private activateRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  //   this.formCategoria = this.formBuilder.group({
  //     nombre: ['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {
  //   const id = this.activateRoute.snapshot.params['id']
  //   if(id != 0){
  //     this.isedit = true;
  //     this.categoriaService.obtenerCategoria(id).subscribe({
  //       next: (response) => {
  //         this.categoria = response;
  //         this.formCategoria.patchValue({
  //           nombre: this.categoria.nombre
  //         });
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //       }
  //     })
  //   }else{
  //     this.isedit = false;
  //   }
  // }

  // onSubmit(){
  //   if(this.formCategoria.valid){
  //     if(this.isedit){
  //       this.categoria.nombre = this.formCategoria.value.nombre;
  //       this.categoriaService.updateCategoria(this.categoria).subscribe({
  //         next: (response) => {
  //           this.router.navigate(['/back/categorias']);
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         },
  //         complete: () => {
  //         }
  //       })
  //     }else{
  //       this.categoria = {
  //         id: 0,
  //         nombre: this.formCategoria.value.nombre
  //       }
  //       this.categoriaService.createCategoria(this.categoria).subscribe({
  //         next: (response) => {
  //           this.router.navigate(['/back/categorias']);
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         },
  //         complete: () => {}
  //       })
  //     }
  //   }
  // }
}
