import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-admin-title',
  templateUrl: './main-admin-title.component.html',
  styleUrls: ['./main-admin-title.component.scss']
})
export class MainAdminTitleComponent implements OnInit {

  @Input('title') title;
  @Input('type') type;
  @Input('link') link;

  constructor() { }

  ngOnInit(): void {
  }

}
