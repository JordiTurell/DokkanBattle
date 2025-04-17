import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LinksVM } from '@infrastructure/vm/links-vm';

import { LinksService } from '@infrastructure/services/links/links.service';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'app-back-ficha-links',
  imports: [ReactiveFormsModule],
  templateUrl: './back-ficha-links.component.html',
  styleUrl: './back-ficha-links.component.css'
})
export class BackFichaLinksComponent implements OnInit{
  isedit: boolean = false;
  formLinks: FormGroup;
  linksvm: LinksVM = inject(LinksVM);
  linkService: LinksService = inject(LinksService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.formLinks = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id != 0) {
      this.isedit = true;
      this.linksvm.getItem(id, () => {
        this.formLinks.patchValue(this.linksvm.linkdto);    
      });
    }else{
      this.isedit = false;
    }
  }

  onSubmit() {
    if(this.formLinks.valid) {
      if(this.isedit) {
        this.linksvm.linkdto = this.formLinks.value;
        this.linksvm.linkdto.id = this.route.snapshot.params['id'];
        this.linksvm.updateLink(() => {this.router.navigate(['/back/links'])})
      }else{
        this.linksvm.linkdto = this.formLinks.value;
        this.linksvm.linkdto.id = 0;
        this.linksvm.createLink(() => {this.router.navigate(['/back/links'])})
      }
    }
  }
}
