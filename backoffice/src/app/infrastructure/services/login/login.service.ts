import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HeadersService } from '@infrastructure/services/headers/headers.service';
import { Observable } from 'rxjs';
import { LoginViewModel } from '@infrastructure/repository/login-view-model';
import { Token } from '@model/token';
import { environment } from '@environments/environment';
import { Responseitem } from '@model/responseitem';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private http:HttpClient = inject(HttpClient);

  login(form:LoginViewModel): Observable<Responseitem<Token>>{
    return this.http.post<Responseitem<Token>>(
      `${environment.api}/auth/login`,
      form
    );
  }
}
