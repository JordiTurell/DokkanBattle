import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { AuthService } from '@infrastructure/services/auth/auth.service';

@Component({
  selector: 'app-back-toolbar',
  imports: [],
  templateUrl: './back-toolbar.component.html',
  styleUrl: './back-toolbar.component.css'
})
export class BackToolbarComponent {
 
  isProfileOpen = false;
  urlassets = environment.urlimages;

  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);

  closeSession(){
    this.authService.removeToken();
    this.router.navigate(['/']);
  }
}
