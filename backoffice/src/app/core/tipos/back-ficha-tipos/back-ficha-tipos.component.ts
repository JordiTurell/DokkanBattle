import { Component } from '@angular/core';
// import { TiposService } from '../../../service/tipos/tipos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Tipo } from '../../../models/tipo';
// import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-back-ficha-tipos',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './back-ficha-tipos.component.html',
  styleUrl: './back-ficha-tipos.component.css'
})
export class BackFichaTiposComponent {
  // isedit: boolean = false;
  // urlimagen: string =  environment.urlimages;
  // formTipo: FormGroup;
  // tipo!: Tipo;
  // selectTipos = ['Agl', 'Teq', 'Int', 'Frz', 'Phy']

  // constructor(private route: ActivatedRoute, private router: Router, private tipoService: TiposService, private formBuilder: FormBuilder) {
  //   this.formTipo = this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //     pathimagen: ['', Validators.required]
  //   });
    
  // }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['id']
  //   if(id != 0){
  //     this.isedit = true;
  //     this.tipoService.obtenerTipo(id).subscribe(tipo => {
  //       this.tipo = tipo;
  //       this.formTipo.get('nombre')?.setValue(this.tipo.nombre);
  //       this.formTipo.get('pathimagen')?.setValue(this.tipo.pathimagen);
  //       this.mostrarImagenTipo(this.tipo.nombre);
  //     });
  //   }else{
  //     this.isedit = false;
  //     this.tipo = {
  //       id: 0,
  //       nombre: '',
  //       pathimagen: ''
  //     }
  //   }
  // }

  // mostrarImagenTipo(value:string): void{
  //   const contentImagen = document.getElementById('imagenTipo') as HTMLDivElement;
  //   const imagen = contentImagen.querySelector('img') as HTMLImageElement;
  //   contentImagen.classList.remove('hidden');
    
  //   switch(value){
  //     case 'Agl':
  //       imagen.src = `${this.urlimagen}/type/agl_base.webp`;
  //       this.tipo.pathimagen = `/type/agl_base.webp`;
        
  //       break;
  //     case 'Teq':
  //       imagen.src = `${this.urlimagen}/type/teq_base.webp`;
  //       this.tipo.pathimagen = `/type/teq_base.webp`;
  //       break;
  //     case 'Int':
  //       imagen.src = `${this.urlimagen}/type/int_base.webp`;
  //       this.tipo.pathimagen = `/type/int_base.webp`;
  //       break;
  //     case 'Frz':
  //       imagen.src = `${this.urlimagen}/type/red_base.webp`;
  //       this.tipo.pathimagen = `/type/red_base.webp`;
  //       break;
  //     case 'Phy':
  //       imagen.src = `${this.urlimagen}/type/phy_base.webp`;
  //       this.tipo.pathimagen = `/type/phy_base.webp`;
  //       break;
  //     default:
  //       imagen.src = '';
  //       this.tipo.pathimagen = '';
  //       break;
  //   }
  //   this.formTipo.get('pathimagen')?.setValue(this.tipo.pathimagen);
  // }

  // onChangeTipo(event: Event){
  //   const target = event.target as HTMLSelectElement;
  //   const value = target.value;
  //   this.formTipo.get('nombre')?.setValue(value);

  //   this.mostrarImagenTipo(value);

  //   this.tipo.nombre = value;
    
  // }

  // onSubmit(){
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
  // }
}
