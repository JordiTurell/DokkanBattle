import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../../back/service/headers/headers.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Nivelcarta } from '../../back/models/nivelcarta';

@Injectable({
  providedIn: 'root'
})
export class NivelCartaService {

  constructor(private http: HttpClient, private headers:HeadersService) { 

  }

  listarNivelesCarta():Observable<Nivelcarta[]>{
    return this.http.get<Nivelcarta[]>(`${environment.api}/nivelcarta/listarAll`, {headers: this.headers.getheader() });
  }
}
