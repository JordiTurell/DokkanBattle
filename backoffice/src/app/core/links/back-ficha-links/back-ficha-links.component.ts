import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { LinksService } from '../../../service/links/links.service';
// import { Links } from '../../../models/links';


@Component({
  selector: 'app-back-ficha-links',
  imports: [ReactiveFormsModule],
  templateUrl: './back-ficha-links.component.html',
  styleUrl: './back-ficha-links.component.css'
})
export class BackFichaLinksComponent implements OnInit{
  // isedit: boolean = false;
  // formLinks: FormGroup;
  // link!: Links;

  // constructor(private formBuilder: FormBuilder, private linkService: LinksService, private route: ActivatedRoute, private router: Router) {
  //   this.formLinks = this.formBuilder.group({
  //     nombre: ['', Validators.required],
  //   });
  // }

  ngOnInit(): void {
  //   const id = this.route.snapshot.params['id'];
  //   if(id != 0) {
  //     this.isedit = true;
  //     this.linkService.obtenerLink(id).subscribe({
  //       next: (res) => {
  //         this.link = res;
  //         this.formLinks.patchValue(this.link);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log('completado');
  //       }
  //     });
  //   }else{
  //     this.isedit = false;
  //   }
  }

  // onSubmit() {
  //   if(this.formLinks.valid) {
  //     if(this.isedit) {
  //       this.link.nombre = this.formLinks.value.nombre;
  //       this.linkService.editarLink(this.link).subscribe({
  //         next: (res) => {
  //           this.router.navigate(['/back/links']);
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         },
  //         complete: () => {
  //           console.log('completado');
  //         }
  //       });
  //     }else{
  //       this.link = {
  //         id: 0,
  //         nombre: this.formLinks.value.nombre,
  //       }
  //       this.linkService.nuevoLink(this.link).subscribe({
  //         next: (res) => {
  //           this.router.navigate(['/back/links']);
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         },
  //         complete: () => {
  //           console.log('completado');
  //         }
  //       });
  //     }
  //   }

  // }
}
