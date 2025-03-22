import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { Observable } from 'rxjs';
import { Login } from '../../models/login';
import { Token } from '../../models/token';
import { environment } from '../../../../environments/environment';
import { Responseitem } from '../../models/responseitem';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private headers:HeadersService, private http: HttpClient) { 

  }

  login(form:Login): Observable<Responseitem<Token>>{
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.post<Responseitem<Token>>(
      `${environment.api}/auth/login`,
      form,
      { headers: header }
    );
  }
}
