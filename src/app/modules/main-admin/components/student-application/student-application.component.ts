import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA= [
  {id_number: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id_number: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id_number: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id_number: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id_number: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id_number: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id_number: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id_number: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id_number: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id_number: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss']
})

export class StudentApplicationComponent implements OnInit {
  isLoading: boolean = false;
  displayedColumns: string[] = ['id_number', 'img', 'name','gender' , 'title', 'job', 'medical_number', 'phone','email', 'action' ];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
