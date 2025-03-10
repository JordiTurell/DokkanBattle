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
  allnivelcarta: Nivelcarta[] = [];

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

  onSelectTipo(event:Event){
    const id = (event.target as HTMLSelectElement).value;
    let background = document.getElementById('background-card-icon') as HTMLImageElement;
    this.rutaimagen = environment.urlimages + this.alltipos.find(t => t.id == parseInt(id))?.pathimagen || '';
    background.src = this.rutaimagen;
  }

  onSelectNivel(event:Event){
    const id = (event.target as HTMLSelectElement).value;
    console.log(id);
  }

  onSubmit(){
    if(this.formcart.valid){
      if(this.isedit){
        
      }else{
        
      }
    }
  }
}
