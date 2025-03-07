import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  private headers: HttpHeaders | null = null;
  private sesion = environment.token
  private token!: string | null
  
  constructor() { }

  getheader():HttpHeaders{
    let jsonlocalstorage = localStorage.getItem(this.sesion)
    if(jsonlocalstorage != null){
      this.token = jsonlocalstorage
    }
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.headers
  }

  getheaderUpdateImage():HttpHeaders{
    let jsonlocalstorage = localStorage.getItem(this.sesion)
    if(jsonlocalstorage != null){
      this.token = jsonlocalstorage
    }
    this.headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${this.token}`
    });

    return this.headers
  }

  getheaderLogin():HttpHeaders{
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.headers
  }
}
