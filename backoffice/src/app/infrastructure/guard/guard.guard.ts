import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { AuthService } from '@infrastructure/services/auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);

    constructor(){

    }

    canActivate():Observable<boolean> | boolean{
        return this.CanAccess()
    }

    canMatch():Observable<boolean> | boolean{
        return this.CanAccess()
    }

    CanAccess():Observable<boolean> | boolean {
        const token = this.authService.getToken();

        if (token != null) {
            return this.authService.isAuthenticated(token).pipe(
                map((response) => {
                    if (response.authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                })
            );
        } else {
            this.router.navigate(['/login']);
            return of(false); 
        }
    }  
}