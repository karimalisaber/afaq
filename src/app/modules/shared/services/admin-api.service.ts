import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AdminAuthService } from './../../main-admin/services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminApiService implements HttpInterceptor {

  constructor(private auth: AdminAuthService) { }

  intercept(req, next){
    let token = this.auth.getToken();

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` 
      }
    });

    return next.handle(tokenizedReq);
  }
}
