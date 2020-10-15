import { Component, OnInit } from '@angular/core';
import { AssetsService } from './../../../../shared/services/assets.service';

@Component({
  selector: 'app-add-course-finish',
  templateUrl: './add-course-finish.component.html',
  styleUrls: ['./add-course-finish.component.scss']
})
export class AddCourseFinishComponent implements OnInit {

  constructor(private assets: AssetsService) { }

  ngOnInit(): void {
  }

  
  done(){
    this.assets.addSuccess().afterDismissed().subscribe(res=>{
      location.reload();
    });
  }
}
