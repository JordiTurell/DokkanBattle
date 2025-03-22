import { Component, OnInit } from '@angular/core';
// import { environment } from '../../../../../environments/environment';
// import { Icono } from '../../../models/icono';
// import { IconosService } from '../../../service/iconos/iconos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-iconos',
  imports: [],
  templateUrl: './ficha-iconos.component.html',
  styleUrl: './ficha-iconos.component.css'
})
export class FichaIconosComponent implements OnInit{
  // isedit:Boolean = false
  // urlicon:string = environment.urlicon
  // icon!:Icono
  // formdata!: FormData
  // imageView:string | ArrayBuffer | null = null
  // selectedFile!: File;

  // constructor(private iconos: IconosService, private router: Router, private activateRoute: ActivatedRoute){

  // }

  ngOnInit(): void {
  //   const id = this.activateRoute.snapshot.params['id']
  //   if(id != 0){
  //     this.isedit = true
  //     this.formdata = new FormData()  
  //   }else{
  //     this.formdata = new FormData()  
  //   }
  }

  // onFileSelected(event:Event){
  //   const input = event.target as HTMLInputElement
  //   if(input.files && input.files.length > 0){
  //     this.selectedFile = input.files[0]
      
  //     const reader = new FileReader()
  //     reader.onload = () => {
  //       this.imageView = reader.result
  //     }
  //     reader.readAsDataURL(this.selectedFile)
  //   }
  // }

  // uploadFile(){
  //   this.formdata = new FormData()
  //   this.formdata.append('image', this.selectedFile)
    
  //   this.iconos.updateIcon(this.formdata).subscribe((response) => {
  //     this.router.navigate(['/back/iconos'])
  //   })
  // }
}
