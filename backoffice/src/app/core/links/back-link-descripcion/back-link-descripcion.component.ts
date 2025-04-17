import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableComponent } from '@core/shared/table/table.component';
import { LinksDetalleVM } from '@infrastructure/vm/links-detalle-vm';

@Component({
  selector: 'app-back-link-descripcion',
  imports: [ReactiveFormsModule, TableComponent],
  templateUrl: './back-link-descripcion.component.html',
  styleUrl: './back-link-descripcion.component.css'
})
export class BackLinkDescripcionComponent implements OnInit{
  isedit: boolean = false;
  form: FormGroup;
  @Input()linkTitle: string =  ''
  linksvm: LinksDetalleVM = inject(LinksDetalleVM);
  router: Router = inject(Router); 
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required],
      idlink: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.linksvm.linkdetalle.idlink = this.route.snapshot.params['id'];
    this.linksvm.listar(() => {
      this.linksvm.getItem(this.linksvm.linkdetalle.idlink, () => {
        //this.linkTitle = this.linksvm.linkdetalle.nombre;
      });
    });
  }

  onEdit(id:number){
    this.linksvm.obtenerLink(id, () => {
      this.form.patchValue(this.linksvm.linkdetalle);
      this.isedit = true;
    });
  }
  nuevo() {
    this.linksvm.linkdetalle = this.form.value;
    this.linksvm.nuevo(() => {
      this.isedit = false;
      this.form.reset();
    });
  }

  edit(){
    this.linksvm.linkdetalle = this.form.value;
    this.linksvm.editar(() => {
      this.isedit = false;
      this.form.reset();
    });
  }

  onDelete(id: number) {
    this.linksvm.onDelete(id, () => {});
  }
  
  onChangeItemsPerPage(items:number) {
    this.linksvm.itemsPerPage = items;
    this.linksvm.onChangeItemsPerPage(() => {
      this.linksvm.listar(() => { });
    });
  }

  onClickPagina(pagina:number){
    this.linksvm.currentPage = pagina;
    this.linksvm.onClickPagina(() => {
      this.linksvm.listar(() => { });
    });
  }
}
