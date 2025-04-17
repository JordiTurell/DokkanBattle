import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Responseitem } from '@model/responseitem';
import { Observable } from 'rxjs';
import { Icono } from '@model/icono';
import { ResponseList } from '@model/responselist';

@Injectable({
  providedIn: 'root'
})
export class IconosService {
  http:HttpClient = inject(HttpClient);

  constructor() { 

  }

  updateIcon(formData: FormData): Observable<Responseitem<string>>{
    return this.http.post<Responseitem<string>>(`${environment.api}/iconos/update`, formData)
  }

  listar(page: number = 1, limit: number = 10): Observable<ResponseList<Icono>> {
    const responselist = {
      page: page,
      limit: limit
    }
      
    return this.http.post<ResponseList<Icono>>(`${environment.api}/iconos/listar`, responselist);
  }

  eliminar(id: number): Observable<Responseitem<string>>{
    return this.http.delete<Responseitem<string>>(`${environment.api}/iconos/delete/${id}`)
  }
}
