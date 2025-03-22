import { Component, inject } from '@angular/core';
import { ButtonSubmitComponent } from '@core/shared/button-submit/button-submit.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { environment } from '@environments/environment';
import { LoginViewModel } from '@infrastructure/repository/login-view-model';
import { LoginService } from '@infrastructure/services/login/login.service';
import { AuthService } from '@infrastructure/services/auth/auth.service';
import { Router } from '@angular/router';
import { Responseitem } from '@model/responseitem';
import { Token } from '@model/token';
import { rxResource } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonSubmitComponent], //, ModalErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  urlimages = environment.urlimages;
  loginForm: FormGroup;
  private loginservice: LoginService = inject(LoginService);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });   
  }

  onSubmit() {
  //   this.isLoading = true
    if (this.loginForm.valid) {
      const formData: LoginViewModel = this.loginForm.value;

      this.loginservice.login(formData).subscribe((response: Responseitem<Token>) => {
        if (response) {
          if(response.status) {
            this.authService.setToken(response.data.token);
            this.router.navigate(['/']);
          }
        }
      });
    }
  }
}