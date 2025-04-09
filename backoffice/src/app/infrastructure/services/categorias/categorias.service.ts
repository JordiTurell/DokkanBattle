import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Categoria } from '@model/categoria';
import { ResponseList } from '@model/responselist';
import { CategoriasDto } from '@infrastructure/dto/categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  http: HttpClient = inject(HttpClient);
  constructor() { 

  }

  obtenerCategoria(id: number): Observable<CategoriasDto> {
    return this.http.get<CategoriasDto>(`${environment.api}/categorias/getcat/${id}`);
  }

  createCategoria(categoria: CategoriasDto): Observable<Categoria> {
    return this.http.post<CategoriasDto>(`${environment.api}/categorias/crear`, categoria);
  }
  
  updateCategoria(categoria: CategoriasDto): Observable<Categoria> {
    
    return this.http.put<CategoriasDto>(`${environment.api}/categorias/editar/${categoria.id}`, categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    
    return this.http.delete<void>(`${environment.api}/categorias/eliminar/${id}`);
  }

  listarCategorias(page: number = 1, limit: number = 10): Observable<ResponseList<Categoria>> {
   const responselist: ResponseList<Categoria> = {
    items: [],
    total: 0,
    page: page,
    limit: limit
   }
    
    
    return this.http.post<ResponseList<Categoria>>(`${environment.api}/categorias/listar`, responselist);
  }
}
