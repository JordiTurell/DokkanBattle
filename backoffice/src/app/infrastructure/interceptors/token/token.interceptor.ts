import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    headers: req.headers.append('Content-Type', 'application/json')
                        .append('Authorization', `Bearer ${localStorage.getItem('token')}`)                        
  });
  if(req.url.includes('login')){
    newReq.headers.delete('Authorization');   
  }
  return next(newReq)
};
