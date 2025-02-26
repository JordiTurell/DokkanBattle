import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseList } from '../../../../../Api/models/responselist';
import { LinkDescripcion } from '../../models/link-descripcion';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkDescriptionService {

  constructor(private http: HttpClient, private headers: HeadersService) { 

  }

  listar(page: number, size: number): Observable<ResponseList<LinkDescripcion>>{
    let headers = this.headers.getheader();
    const req = {
      page: page,
      size: size
    }
    return this.http.post<ResponseList<LinkDescripcion>>(`${environment.api}/linksdescripcion/listar`, req, { headers: headers });
  }

  nuevo(linkDescripcion: LinkDescripcion): Observable<LinkDescripcion>{
    let headers = this.headers.getheader();
    return this.http.post<LinkDescripcion>(`${environment.api}/linksdescripcion/crear`, linkDescripcion, { headers: headers });
  }

  editar(linkDescripcion: LinkDescripcion): Observable<LinkDescripcion>{
    let headers = this.headers.getheader();
    return this.http.put<LinkDescripcion>(`${environment.api}/linksdescripcion/actualizar/${linkDescripcion.id}`, linkDescripcion, { headers: headers });
  }

  eliminar(id: number): Observable<LinkDescripcion>{
    let headers = this.headers.getheader();
    return this.http.delete<LinkDescripcion>(`${environment.api}/linksdescripcion/eliminar/${id}`, { headers: headers });
  }

  obtener(id: number): Observable<LinkDescripcion>{
    let headers = this.headers.getheader();
    return this.http.get<LinkDescripcion>(`${environment.api}/linksdescripcion/obtener/${id}`, { headers: headers });
  }
}
