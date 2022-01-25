import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Add Bearer token to request headers in backend we haven't "Bearer" so not include Bearer in setHeaders
    const token = window.localStorage.getItem('token');
    const authToken = token != null ? token : '';
    
    //const authToken = this.userService.authToken;
    const authReq = req.clone({
      setHeaders: { Authorization: authToken }
    });

    return next.handle(authReq);
  }
}
