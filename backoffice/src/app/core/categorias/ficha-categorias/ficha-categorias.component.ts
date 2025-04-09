import { Component, inject } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriasService } from '@infrastructure/services/categorias/categorias.service';
import { CategoriasDto } from '@infrastructure/dto/categoria-dto';
import { CategoriasVM } from '@infrastructure/vm/categorias-vm';

@Component({
  selector: 'app-ficha-categorias',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './ficha-categorias.component.html',
  styleUrl: './ficha-categorias.component.css'
})
export class FichaCategoriasComponent {
  isedit:boolean = false;
  categoria!:CategoriasDto;
  formCategoria: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);
  categoriaVM:CategoriasVM = inject(CategoriasVM);

  constructor(){
    this.formCategoria = this.formBuilder.group({
        nombre: ['', Validators.required],
        id: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    if(id != 0){
      this.categoriaVM.getItem(id, () => {
        this.formCategoria.patchValue({
          nombre: this.categoriaVM.categoriadto.nombre,
          id: this.categoriaVM.categoriadto.id
        });
        this.isedit = true;
      })
    }else{
      this.isedit = false;

    }
  }

  onSubmit(){
    if(this.formCategoria.valid){
      if(this.isedit){
        this.categoriaVM.categoriadto = this.formCategoria.value;
        this.categoriaVM.updateCategoria(() => {
          this.router.navigate(['/categorias']);
        })
      }else{
        this.categoriaVM.categoriadto = {
          id: 0,
          nombre: this.formCategoria.value.nombre
        }
        this.categoriaVM.createCategoria(() => {
          this.router.navigate(['/categorias']);
        })
      }
    }
  }
}
