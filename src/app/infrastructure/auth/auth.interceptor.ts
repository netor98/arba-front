import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = 'your-auth-token'; // Replace with actual token retrieval logic
    const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
    return next.handle(authReq);
  }
}
