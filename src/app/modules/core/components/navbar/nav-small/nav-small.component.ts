import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-small',
  templateUrl: './nav-small.component.html',
  styleUrls: ['./nav-small.component.scss']
})
export class NavSmallComponent implements OnInit {
  navCollapse: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  navToggle(){ // for nav itself
    this.navCollapse = !this.navCollapse;
  }

}
