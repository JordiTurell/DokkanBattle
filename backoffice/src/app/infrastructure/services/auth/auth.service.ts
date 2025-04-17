import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localstoragetoken = environment.token
  http: HttpClient = inject(HttpClient);
  
  isAuthenticated(token: string): Observable<{ authenticated: boolean; statusCode: number }> {
    return this.http.get(`${environment.api}/auth/verificartoken`, { observe: 'response', params: { token } }).pipe(
      map((response) => ({
        authenticated: true,
        statusCode: response.status // Código HTTP en caso de éxito
      })),
      catchError((error) => of({
        authenticated: false,
        statusCode: error.status // Código HTTP en caso de error
      }))
    );
  }

  setToken(token: string): boolean {
    localStorage.setItem(this.localstoragetoken, token)
    return true
  }

  removeToken(): void {
    localStorage.removeItem(this.localstoragetoken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.localstoragetoken);
  }
}
