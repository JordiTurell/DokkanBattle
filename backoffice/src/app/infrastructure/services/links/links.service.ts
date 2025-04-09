import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ResponseList } from '@model/responselist';
import { Links } from '@model/links';
import { LinksDTO } from '@infrastructure/dto/links-dto';
import { LinkDescripcionDTO } from '@infrastructure/dto/link-descripcion-dto';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private http:HttpClient = inject(HttpClient);

  constructor() { 

  }

  listarLinks(page: number, size: number): Observable<ResponseList<Links>>{
    const req = {
      page: page,
      size: size
    }
    return this.http.post<ResponseList<Links>>(`${environment.api}/links/listar`, req);
  }

  nuevoLink(link: LinksDTO): Observable<Links>{
    return this.http.post<Links>(`${environment.api}/links/crear`, link);
  }

  editarLink(link: LinksDTO): Observable<Links>{
    return this.http.put  <Links>(`${environment.api}/links/actualizar/${link.id}`, link);
  }

  eliminarLink(id: number): Observable<Links>{
    return this.http.delete<Links>(`${environment.api}/links/eliminar/${id}`);
  }

  obtenerLink(id: number): Observable<Links>{
    return this.http.get<Links>(`${environment.api}/links/obtener/${id}`);
  }
}
