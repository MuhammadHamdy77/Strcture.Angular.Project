import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) { 
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if user is logged in and request is to the api url
      const currentUser = this.authService.currentUserValue;     
        
      const isLoggedIn = currentUser && sessionStorage.getItem('xToken');
      const isApiUrl = request.url.startsWith(environment.baseUrl);
      if (isLoggedIn && isApiUrl) {
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${sessionStorage.getItem('xToken')}`,
              }
          });
          
      }
      return next.handle(request);
  }
}
