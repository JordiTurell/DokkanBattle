import { Component, inject } from '@angular/core';
import { ButtonSubmitComponent } from '@core/shared/button-submit/button-submit.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { environment } from '@environments/environment';
import { Route, Router } from '@angular/router';
import { LoginViewModel } from '@infrastructure/vm/login-vm';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonSubmitComponent], //, ModalErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  urlimages = environment.urlimages;
  loginForm: FormGroup;
  public router:Router = inject(Router);
  public loginViewModel: LoginViewModel = inject(LoginViewModel);
  
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });   
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginViewModel.logindto = this.loginForm.value;
      this.loginViewModel.login(()=>this.router.navigate(['/']))
    }
  }
}