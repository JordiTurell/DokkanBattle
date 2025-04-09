import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseList } from '@model/responselist';
import { environment } from '@environments/environment';
import { Tipo } from '@model/tipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private http: HttpClient) { 

  }

  listarAllTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(`${environment.api}/tipos/alllist`);
  }

  listarTipos(page: number = 1, limit: number = 10): Observable<ResponseList<Tipo>> {
    const responselist: ResponseList<Tipo> = {
      items: [],
      total: 0,
      page: page,
      limit: limit
     }
     
     return this.http.post<ResponseList<Tipo>>(`${environment.api}/tipos/listar`, responselist);
  }

  crearTipo(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(`${environment.api}/tipos/crear`, tipo);
  }
  
  actualizarTipo(tipo: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(`${environment.api}/tipos/actualizar`, tipo);
  }

  eliminarTipo(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/tipos/eliminar/${id}`);
  }

  obtenerTipo(id: number): Observable<Tipo> {
    return this.http.get<Tipo>(`${environment.api}/tipos/obtener/${id}`);
  }
}
