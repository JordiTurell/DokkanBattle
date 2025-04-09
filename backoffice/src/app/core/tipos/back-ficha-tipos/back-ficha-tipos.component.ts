import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '@environments/environment';
import { TipoDto } from '@infrastructure/dto/tipo-dto';
import { TiposVM } from '@infrastructure/vm/tipos-vm';

@Component({
  selector: 'app-back-ficha-tipos',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './back-ficha-tipos.component.html',
  styleUrl: './back-ficha-tipos.component.css'
})
export class BackFichaTiposComponent implements OnInit {
  isedit: boolean = false;
  urlimagen: string =  environment.urlimages;
  formTipo: FormGroup;
  tipo!: TipoDto;
  tipovm : TiposVM = inject(TiposVM);
  route = inject(ActivatedRoute);

  selectTipos = ['Agl', 'Teq', 'Int', 'Frz', 'Phy']

  constructor(private formBuilder: FormBuilder) {
    this.formTipo = this.formBuilder.group({
      nombre: ['', Validators.required],
      pathimagen: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.tipovm.getItem(id, (edit) => {
      this.tipo = this.tipovm.tipodto;
      this.isedit = edit;
      this.formTipo.get('nombre')?.setValue(this.tipo.nombre);
      this.formTipo.get('pathimagen')?.setValue(this.tipo.pathimagen);
    });
  }

  mostrarImagenTipo(value:string): void{
    const contentImagen = document.getElementById('imagenTipo') as HTMLDivElement;
    const imagen = contentImagen.querySelector('img') as HTMLImageElement;
    contentImagen.classList.remove('hidden');
      switch(value){
      case 'Agl':
        imagen.src = `${this.urlimagen}/type/agl_base.webp`;
        this.tipo.pathimagen = `/type/agl_base.webp`;
     
        break;
      case 'Teq':
        imagen.src = `${this.urlimagen}/type/teq_base.webp`;
        this.tipo.pathimagen = `/type/teq_base.webp`;
        break;
      case 'Int':
        imagen.src = `${this.urlimagen}/type/int_base.webp`;
        this.tipo.pathimagen = `/type/int_base.webp`;
        break;
      case 'Frz':
        imagen.src = `${this.urlimagen}/type/red_base.webp`;
        this.tipo.pathimagen = `/type/red_base.webp`;
        break;
      case 'Phy':
        imagen.src = `${this.urlimagen}/type/phy_base.webp`;
        this.tipo.pathimagen = `/type/phy_base.webp`;
        break;
      default:
        imagen.src = '';
        this.tipo.pathimagen = '';
        break;
    }
    this.formTipo.get('pathimagen')?.setValue(this.tipo.pathimagen);
  }

  onChangeTipo(event: Event){
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.formTipo.get('nombre')?.setValue(value);
    this.mostrarImagenTipo(value);
    this.tipo.nombre = value;
  }

  onSubmit(){
  //   if(this.formTipo.valid){
  //     if(this.isedit){
  //       this.tipoService.actualizarTipo(this.tipo).subscribe({
  //         next: () => {
  //           this.router.navigate(['/back/tipos']);
  //         },
  //         error: () => {
  //           console.log('Error al editar el tipo');
  //         }
  //       });
  //     }else{
  //       this.tipoService.crearTipo(this.tipo).subscribe({
  //         next: () => {
  //           this.router.navigate(['/back/tipos']);
  //         },
  //         error: () => {
  //           console.log('Error al crear el tipo');
  //         }
  //       });
  //     }
  //   }
  }
}
