import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadersService } from '../headers/headers.service';
import { environment } from '../../../../environments/environment';
import { Categoria } from '../../models/categoria';
import { ResponseList } from '../../models/responselist';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient, private headers: HeadersService) { 

  }

  obtenerCategoria(id: number): Observable<Categoria> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Categoria>(`${environment.api}/categorias/getcat/${id}`, { headers: header });
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<Categoria>(`${environment.api}/categorias/crear`, categoria, { headers: header });
  }
  
  updateCategoria(categoria: Categoria): Observable<Categoria> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.put<Categoria>(`${environment.api}/categorias/editar/${categoria.id}`, categoria, { headers: header });
  }

  deleteCategoria(id: number): Observable<void> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.delete<void>(`${environment.api}/categorias/eliminar/${id}`, { headers: header });
  }

  listarCategorias(page: number = 1, limit: number = 10): Observable<ResponseList<Categoria>> {
   const responselist: ResponseList<Categoria> = {
    items: [],
    total: 0,
    page: page,
    limit: limit
   }
    
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<ResponseList<Categoria>>(`${environment.api}/categorias/listar`, responselist, { headers: header });
  }
}
