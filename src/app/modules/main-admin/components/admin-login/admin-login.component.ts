import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from './../../services/admin-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  isLoading:boolean = false;
  invalidLogin: boolean = false;

  constructor(private auth: AdminAuthService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    
  }


  login(credentials) {
    console.log(credentials);
    this.invalidLogin = false;
    
    this.isLoading = true;

    this.auth.login(credentials).subscribe(
     resl=>
    {
      
      let returnUrl = '/admin';

      this.router.navigateByUrl('/admin');
      
    }, error => {
      this.isLoading = false;
      this.invalidLogin = true;
    }
    ,()=> this.isLoading = false 
     
  );  
  }

}
