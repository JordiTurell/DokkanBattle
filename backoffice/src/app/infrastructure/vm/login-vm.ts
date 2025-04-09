import { inject, Injectable } from "@angular/core";
import { LoginDTO } from "@infrastructure/dto/login-dto";
import { AuthService } from "@infrastructure/services/auth/auth.service";
import { LoginService } from "@infrastructure/services/login/login.service";
import { Responseitem } from "@model/responseitem";
import { Token } from "@model/token";

@Injectable({
  providedIn: 'root'
})
export class LoginViewModel{

  public logindto:LoginDTO = {} as LoginDTO;
  private loginservice: LoginService = inject(LoginService);
  private authService: AuthService = inject(AuthService);
  
  constructor(){}

  public login(onSuccess:()=>void):void{
    this.loginservice.login(this.logindto).subscribe((response: Responseitem<Token>) => {
      if (response) {
        if(response.status) {
          this.authService.setToken(response.data.token);
          onSuccess();
        }
      }
    });
  }
}