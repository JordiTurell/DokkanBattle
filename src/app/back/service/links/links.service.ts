import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { ResponseList } from '../../models/responselist';
import { Links } from '../../models/links';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient, private headers: HeadersService) { }

  listarLinks(page: number, size: number): Observable<ResponseList<Links>>{
    let headers = this.headers.getheader();
    const req = {
      page: page,
      size: size
    }
    return this.http.post<ResponseList<Links>>(`${environment.api}/links/listar`, req, { headers: headers });
  }

  nuevoLink(link: Links): Observable<Links>{
    let headers = this.headers.getheader();
    return this.http.post<Links>(`${environment.api}/links/crear`, link, { headers: headers });
  }

  editarLink(link: Links): Observable<Links>{
    let headers = this.headers.getheader();
    return this.http.put  <Links>(`${environment.api}/links/actualizar/${link.id}`, link, { headers: headers });
  }

  eliminarLink(id: number): Observable<Links>{
    let headers = this.headers.getheader();
    return this.http.delete<Links>(`${environment.api}/links/eliminar/${id}`, { headers: headers });
  }

  obtenerLink(id: number): Observable<Links>{
    let headers = this.headers.getheader();
    return this.http.get<Links>(`${environment.api}/links/obtener/${id}`, { headers: headers });
  }
}
