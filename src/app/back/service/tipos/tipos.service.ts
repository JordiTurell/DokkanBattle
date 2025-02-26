import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseList } from '../../models/responselist';
import { environment } from '../../../../environments/environment';
import { Tipo } from '../../models/tipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private http: HttpClient, private headers: HeadersService) { 

  }

  listarTipos(page: number = 1, limit: number = 10): Observable<ResponseList<Tipo>> {
    const responselist: ResponseList<Tipo> = {
      items: [],
      total: 0,
      page: page,
      limit: limit
     }
     let header: HttpHeaders = this.headers.getheader();
     return this.http.post<ResponseList<Tipo>>(`${environment.api}/tipos/listar`, responselist, { headers: header });
  }

  crearTipo(tipo: Tipo): Observable<Tipo> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<Tipo>(`${environment.api}/tipos/crear`, tipo, { headers: header });
  }
  
  actualizarTipo(tipo: Tipo): Observable<Tipo> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.put<Tipo>(`${environment.api}/tipos/actualizar`, tipo, { headers: header });
  }

  eliminarTipo(id: number): Observable<void> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.delete<void>(`${environment.api}/tipos/eliminar/${id}`, { headers: header });
  }

  obtenerTipo(id: number): Observable<Tipo> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Tipo>(`${environment.api}/tipos/obtener/${id}`, { headers: header });
  }
}
