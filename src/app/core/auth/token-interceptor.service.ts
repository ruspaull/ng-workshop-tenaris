import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken = inject(AuthService).getToken();
  if (!authToken) {
    return next(req);
  }

  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer SAdjoakdjsaoidjqwoiejqwoiejqwioejqwoieqjio ${authToken}`),
  });
  return next(newReq);
}
