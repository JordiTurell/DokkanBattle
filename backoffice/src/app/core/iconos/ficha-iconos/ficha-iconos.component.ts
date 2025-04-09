import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconoVM } from '@infrastructure/vm/iconos-vm';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-ficha-iconos',
  imports: [],
  templateUrl: './ficha-iconos.component.html',
  styleUrl: './ficha-iconos.component.css'
})
export class FichaIconosComponent implements OnInit{
  isedit:Boolean = false
  urlicon:string = environment.urlicon
  
  formdata!: FormData
  imageView:string | ArrayBuffer | null = null
  selectedFile!: File;

  router:Router = inject(Router);
  activateRoute:ActivatedRoute = inject(ActivatedRoute);
  iconosVM: IconoVM = inject(IconoVM);

  constructor() {
    
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    if(id != 0){
      this.isedit = true
    }
    this.formdata = new FormData()  
  }

  onFileSelected(event:Event){
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length > 0){
      this.selectedFile = input.files[0]
   
      const reader = new FileReader()
      reader.onload = () => {
        this.imageView = reader.result
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }

  uploadFile(){
    this.formdata = new FormData()
    this.formdata.append('image', this.selectedFile)
    this.formdata.append('id', this.activateRoute.snapshot.params['id'])

    this.iconosVM.updateFile(this.formdata, () => {
      this.router.navigate(['/iconos'])
    })
  }
}
