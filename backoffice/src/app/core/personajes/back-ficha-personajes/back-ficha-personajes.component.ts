import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileInputComponent } from '@core/shared/file-input/file-input.component';
import { environment } from '@environments/environment';
import { PersonajeVM } from '@infrastructure/vm/personajes-vm';

@Component({
  selector: 'app-back-ficha-personajes',
  imports: [ReactiveFormsModule, FileInputComponent, NgClass],
  templateUrl: './back-ficha-personajes.component.html',
  styleUrl: './back-ficha-personajes.component.css'
})
export class BackFichaPersonajesComponent implements OnInit{
  route:ActivatedRoute = inject(ActivatedRoute)
  router:Router = inject(Router)
  formcart: FormGroup;
  personajesvm: PersonajeVM = inject(PersonajeVM)
  isedit: boolean = false

  //#region Variables de imagenes
  rutaimagen:string = ''
  rutanivelcarta:string = ''
  rutacarta:string = ''
  rutafondo:string = ''
  rutaminicarta:string = ''
  rutaimagenpersonaje:string = ''
  //#endregion
  
  selectedFile: File | null = null
  imageView: string | ArrayBuffer | null = null
  tiposeleccionado: boolean = false

  constructor(private formBuilder: FormBuilder){ 
     this.formcart = this.formBuilder.group({
       idnivelcarta: ['', Validators.required],
       titulo: ['', Validators.required],
       habilidadLider: ['', Validators.required],
       fechaSalida: ['', Validators.required],
       fechaEza: ['', Validators.required],
       eza: ['']
     });
   }

  ngOnInit(): void {
    this.personajesvm.cargarCombos()
  }

  onSelectTipo(event:Event):void{
    const id = (event.target as HTMLSelectElement).value;
    let background = document.getElementById('background-card-icon') as HTMLImageElement;
    this.rutaimagen = environment.urlimages + this.personajesvm.opcionestipos.find(t => t.id == parseInt(id))?.pathimagen || '';
    
    if(background != null){
      background.src = environment.urlimages + this.rutaimagen;
    }
    
    this.tiposeleccionado = (id != '0') ? true : false;1    
  }

  onSelectNivel(event:Event):void{
    const id = (event.target as HTMLSelectElement).value;
    this.rutanivelcarta = this.personajesvm.logoNivelCarta(parseInt(id));
  }

  onFileChange(file: File):void{      
    const reader = new FileReader()      
    reader.onload = () => {
      this.rutaminicarta = reader.result as string
      const img = document.getElementById('imgcard') as HTMLImageElement
      if(img){
        img.src = this.rutaminicarta
        this.imageView = reader.result
        img.classList.remove('hidden')
      }
    }
    reader.readAsDataURL(file)
  }

  onFileSelectedFondoCarta(file:File):void{      
      const reader = new FileReader()
      reader.onload = () => {
        const img = document.getElementById('background-card') as HTMLImageElement
        this.rutafondo = reader.result as string
        if(img){
          img.src = this.rutafondo
          this.imageView = reader.result
          img.classList.remove('hidden')
        }
      }
      reader.readAsDataURL(file)    
  }

  onFileSelectedPersonajeCarta(file:File):void{      
    const reader = new FileReader()
    reader.onload = () => {
      const img = document.getElementById('personaje-card') as HTMLImageElement
      this.rutaimagenpersonaje = reader.result as string
      if(img){
        img.src = this.rutaimagenpersonaje
        this.imageView = reader.result
        img.classList.remove('hidden')
      }
    }
    reader.readAsDataURL(file)
  }

  onSubmit(){
    if(this.formcart.valid){
      if(this.isedit){
     
      }else{
     
      }
    }
  }
}
