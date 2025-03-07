import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeadersService } from '../headers/headers.service';
import { environment } from '../../../../environments/environment';
import { Responseitem } from '../../models/responseitem';
import { Observable } from 'rxjs';
import { Icono } from '../../models/icono';
import { ResponseList } from '../../models/responselist';

@Injectable({
  providedIn: 'root'
})
export class IconosService {

  constructor(private http: HttpClient, private headers: HeadersService) { 

  }

  updateIcon(formData: FormData): Observable<Responseitem<string>>{
    let headers: HttpHeaders = this.headers.getheaderUpdateImage()
    return this.http.post<Responseitem<string>>(`${environment.api}/iconos/update`, formData, { headers: headers })
  }

  listar(page: number = 1, limit: number = 10): Observable<ResponseList<Icono>> {
     const responselist: ResponseList<Icono> = {
      items: [],
      total: 0,
      page: page,
      limit: limit
     }
      
      let header: HttpHeaders = this.headers.getheader();
      return this.http.post<ResponseList<Icono>>(`${environment.api}/iconos/listar`, responselist, { headers: header });
    }
}
