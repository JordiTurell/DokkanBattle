import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personaje } from '../../models/personaje';
import { Observable } from 'rxjs';
import { ResponseList } from '../../models/responselist';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient, private headers: HeadersService) { }

  listarPersonajes(page: number, limit: number): Observable<ResponseList<Personaje>> {
    const responselist: ResponseList<Personaje> = {
      items: [],
      total: 0,
      page: page,
      limit: limit
    }

    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<ResponseList<Personaje>>(`${environment.api}/personajes/listar`, responselist, { headers: header });
  }
}
