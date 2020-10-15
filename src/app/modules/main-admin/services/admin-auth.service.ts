import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { adminLoginUrl } from 'src/app/backend/variables/Apis';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {  
  constructor(private http: HttpClient) { 
    // console.log(this.token, 'token');

    // const helper = new JwtHelperService();

    // const decodedToken = helper.decodeToken(this.token);


  }
  
  login(credentials){
    return this.http.post(adminLoginUrl, credentials).pipe(take(1),map(
      (res:any)=> {
        let result = res;
        if(result && result.data.token) {          
         
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('role', result.data.role);  
          
          // return true;
        }
        // return false
      }));
  }

  isLogin(){
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
  
    if(!token)
      return false ;

    const isExpired = helper.isTokenExpired(token);
  
    return !isExpired;
  }

  isAdmin(){
    let role = localStorage.getItem('role') === '1'? true: false;

    return role && this.isLogin();
  }

  getToken(){
    let token = localStorage.getItem('token');

    return token;
  }
}
