import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private authService: AuthService, private router:Router){

    }

    canActivate():Observable<boolean> | boolean{
        return this.CanAccess()
    }

    canMatch():Observable<boolean> | boolean{
        return this.CanAccess()
    }

    CanAccess():Observable<boolean> | boolean {
        const token = this.authService.getToken();

        if(token != null ){
            return this.authService.isAuthenticated(token).pipe(
            tap((response) => {
                if (!response) {
                this.router.navigate(['/login'])
                }
            }),
            )
        }else{
            this.router.navigate(['/login'])
            return false;
        }
    }  
}