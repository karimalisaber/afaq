import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService {

  constructor (private route: ActivatedRoute, private router: Router, private auth: AdminAuthService) { }

  canActivate(route, state: RouterStateSnapshot){
    if (this.auth.isAdmin()) return true;

     this.router.navigate([ 'admin_login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
