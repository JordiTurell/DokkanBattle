import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileInputComponent } from '@core/shared/file-input/file-input.component';
import { environment } from '@environments/environment';
import { PersonajeVM } from '@infrastructure/vm/personajes-vm';

@Component({
  selector: 'app-back-ficha-personajes',
  imports: [ReactiveFormsModule, FileInputComponent],
  templateUrl: './back-ficha-personajes.component.html',
  styleUrl: './back-ficha-personajes.component.css'
})
export class BackFichaPersonajesComponent implements OnInit{
  route:ActivatedRoute = inject(ActivatedRoute)
  router:Router = inject(Router)
  formcart: FormGroup;
  personajesvm: PersonajeVM = inject(PersonajeVM)
  isedit: boolean = false
  rutaimagen:string = ''
  rutanivelcarta:string = ''
  rutacarta:string = ''
  rutafondo:string = ''
  rutaimagenpersonaje:string = ''
  selectedFile: File | null = null
  imageView: string | ArrayBuffer | null = null

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
    
    background.src = environment.urlimages + this.rutaimagen;
  }

  onSelectNivel(event:Event):void{
    const id = (event.target as HTMLSelectElement).value;
    this.rutanivelcarta = this.personajesvm.logoNivelCarta(parseInt(id));
  }

  onFileChange(file: File):void{      
      const reader = new FileReader()
      reader.onload = () => {
        const img = document.getElementById('imgcard') as HTMLImageElement
        this.rutacarta = reader.result as string
        if(img){
          img.src = this.rutacarta
          this.imageView = reader.result
          img.classList.remove('hidden')
        }
      
      reader.readAsDataURL(file)
    }
  }

  onFileSelectedIcono(event:Event):void{
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length > 0){
      this.selectedFile = input.files[0]
      
      const reader = new FileReader()
      reader.onload = () => {
        const img = document.getElementById('imgcard') as HTMLImageElement
        this.rutacarta = reader.result as string
        if(img){
          img.src = this.rutacarta
          this.imageView = reader.result
          img.classList.remove('hidden')
        }else{
          input.value = ''
        }
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }

  onFileSelectedBackground(event:Event):void{
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length > 0){
      this.selectedFile = input.files[0]
      
      const reader = new FileReader()
      reader.onload = () => {
        const img = document.getElementById('imgcard') as HTMLImageElement
        this.rutafondo = reader.result as string
        if(img){
          img.src = this.rutafondo
          this.imageView = reader.result
          img.classList.remove('hidden')
        }else{
          input.value = ''
        }
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }

  onFileSelectedPersonaje(event:Event):void{
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length > 0){
      this.selectedFile = input.files[0]
      
      const reader = new FileReader()
      reader.onload = () => {
        const img = document.getElementById('imgcard') as HTMLImageElement
        this.rutaimagenpersonaje = reader.result as string
        if(img){
          img.src = this.rutaimagenpersonaje
          this.imageView = reader.result
          img.classList.remove('hidden')
        }else{
          input.value = ''
        }
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }

  onSubmit(){
    if(this.formcart.valid){
      if(this.isedit){
     
      }else{
     
      }
    }
  }
}
