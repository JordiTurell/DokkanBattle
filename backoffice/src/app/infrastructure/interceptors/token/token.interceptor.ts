import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(environment.token);
  let newReq = req.clone({
    headers: req.headers.append('Content-Type', 'application/json')
  });

  if (token && !req.url.includes('login')) {
    newReq = newReq.clone({
      headers: newReq.headers.append('Authorization', `Bearer ${token}`)
    });
  }

  return next(newReq);
};
