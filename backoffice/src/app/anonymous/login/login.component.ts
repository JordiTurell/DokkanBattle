import { Component, Input } from '@angular/core';
// import { ButtonSubmitComponent } from '../../components/button-submit/button-submit.component';
// import { ModalErrorComponent } from '../../components/modal-error/modal-error.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { LoginService } from '../../service/login/login.service';
// import { AuthService } from '../../service/auth/auth.service';
// import { Router } from '@angular/router';
// import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule], //, ButtonSubmitComponent, ModalErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // urlimages = environment.urlimages;
  // loginForm: FormGroup;
  // @Input() isLoading:boolean = false
  // @Input() errorMessage:string = ''
  // @Input() isModalOpen : boolean = false
  
  // constructor(private formBuilder: FormBuilder, private loginService: LoginService, private authService: AuthService, private router: Router) {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });   
  // }

  // onSubmit() {
  //   this.isLoading = true
  //   if (this.loginForm.valid) {
  //     this.loginService.login(this.loginForm.value).subscribe({
  //       next:(response) => {
  //         if(response.status){
  //           this.authService.setToken(response.data.token)
  //           this.isLoading = false
  //         }
  //       },
  //       error:(e) => {
  //         this.isLoading = false
  //       },
  //       complete:() => {
  //         this.isLoading = false
  //         if(this.authService.getToken() != null){
  //           this.router.navigate(['/back/home'])
  //         }else{
  //           this.errorMessage = 'Acceso incorrecto'
  //           this.isModalOpen = true
  //         }
  //       }
  //     })
  //   }else{
  //     this.isLoading = false
  //   }
  // }

  // onShow(){
  //   this.isModalOpen = true
  // }
}
