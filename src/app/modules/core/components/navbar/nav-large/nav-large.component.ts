import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-large',
  templateUrl: './nav-large.component.html',
  styleUrls: ['./nav-large.component.scss']
})
export class NavLargeComponent implements OnInit {
  user;
  cartCout = 0;

  constructor() { }

  ngOnInit(): void {
    this.getUser();
    this.getCart();
  }

  private getUser(){
    this.user = JSON.parse(localStorage.getItem('user')) || null ;
  }

  private getCart(){
    
  }

}
