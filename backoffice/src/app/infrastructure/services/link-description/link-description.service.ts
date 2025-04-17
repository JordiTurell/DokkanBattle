import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseList } from '@model/responselist';
import { LinkDescripcion } from '@model/link-descripcion';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkDescriptionService {

  constructor(private http: HttpClient, private headers: HeadersService) { 

  }

  listar(page: number, size: number, idlink: number): Observable<ResponseList<LinkDescripcion>>{
    
    const req = {
      page: page,
      size: size,
      filter: idlink
    }
    return this.http.post<ResponseList<LinkDescripcion>>(`${environment.api}/linksdescripcion/listar`, req);
  }

  nuevo(linkDescripcion: LinkDescripcion): Observable<LinkDescripcion>{
    
    return this.http.post<LinkDescripcion>(`${environment.api}/linksdescripcion/crear`, linkDescripcion);
  }

  editar(linkDescripcion: LinkDescripcion): Observable<LinkDescripcion>{
    
    return this.http.put<LinkDescripcion>(`${environment.api}/linksdescripcion/actualizar/${linkDescripcion.id}`, linkDescripcion);
  }

  eliminar(id: number): Observable<LinkDescripcion>{
    
    return this.http.delete<LinkDescripcion>(`${environment.api}/linksdescripcion/eliminar/${id}`);
  }

  obtener(id: number): Observable<LinkDescripcion>{
    
    return this.http.get<LinkDescripcion>(`${environment.api}/linksdescripcion/obtener/${id}`);
  }
}
