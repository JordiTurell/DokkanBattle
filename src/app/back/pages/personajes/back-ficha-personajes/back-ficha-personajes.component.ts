import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TiposService } from '../../../service/tipos/tipos.service';
import { Tipo } from '../../../models/tipo';
import { environment } from '../../../../../environments/environment';
import { NivelCartaService } from '../../../../service/nivel-carta/nivel-carta.service';
import { Nivelcarta } from '../../../models/nivelcarta';

@Component({
  selector: 'app-back-ficha-personajes',
  imports: [ReactiveFormsModule],
  templateUrl: './back-ficha-personajes.component.html',
  styleUrl: './back-ficha-personajes.component.css'
})
export class BackFichaPersonajesComponent implements OnInit{
  isedit:Boolean = false;
  formcart!: FormGroup;
  alltipos: Tipo[] = [];
  rutaimagen: string = '';
  rutanivelcarta:string = ''
  rutacarta: string = '';
  allnivelcarta: Nivelcarta[] = [];
  selectedFile!: File;
  imageView:string | ArrayBuffer | null = null

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private tiposservice: TiposService, private nivelcarta:NivelCartaService){ 
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
    this.tiposservice.listarAllTipos().subscribe((data) => {
      this.alltipos = data;
    })

    this.nivelcarta.listarNivelesCarta().subscribe((data) => {
      this.allnivelcarta = data;
    })
  }

  onSelectTipo(event:Event):void{
    const id = (event.target as HTMLSelectElement).value;
    let background = document.getElementById('background-card-icon') as HTMLImageElement;
    this.rutaimagen = environment.urlimages + this.alltipos.find(t => t.id == parseInt(id))?.pathimagen || '';
    background.src = this.rutaimagen;
  }

  onSelectNivel(event:Event):void{
    const id = (event.target as HTMLSelectElement).value;
    switch(parseInt(id)){
      case 1:
        this.rutanivelcarta = `${environment.urlimages}/level-card/n.webp`;
        break;
      case 2:
        this.rutanivelcarta = `${environment.urlimages}/level-card/r.webp`;
        break;
      case 3:
        this.rutanivelcarta = `${environment.urlimages}/level-card/sr.webp`;
        break;
      case 4:
        this.rutanivelcarta = `${environment.urlimages}/level-card/ssr.webp`;
        break;
      case 5:
        this.rutanivelcarta = `${environment.urlimages}/level-card/ur.webp`;
        break;
      case 6:
        this.rutanivelcarta = `${environment.urlimages}/level-card/lr.webp`;
        break;
      default:
        this.rutanivelcarta = '';
        break;
    }
  }

  onFileSelected(event:Event):void{
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

  onSubmit(){
    if(this.formcart.valid){
      if(this.isedit){
        
      }else{
        
      }
    }
  }
}
