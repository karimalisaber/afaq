import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-main-admin-home',
  templateUrl: './main-admin-home.component.html',
  styleUrls: ['./main-admin-home.component.scss']
})
export class MainAdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
var myChart = new Chart('myChart', {
    type: 'line',
    data: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September', 'October', 'November', 'December'],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September', 'October', 'November', 'December'],

        datasets: [{
            
            data: [0, 0, 0, 0, 1, 5, 1,0,0,0,0,0],
            backgroundColor: [
                '#D4D7FC'
            ],
            borderColor: [
               '#727CF5'
            ]
            ,
            borderWidth: 3
        }]
    },
    
    options: {
        scales: {
            yAxes: [{
                display: false,
                
                ticks: {
                    beginAtZero: true,
                    padding: 0
                },
               
            }],

            xAxes:[{
                
                ticks:{
                    fontSize: 15,
                    // lineHeight: 1,
                    // padding: 40
                },
                
                gridLines:{
                    color:  '#f2f2f2'
                }
            }]
        },
        
        responsive : true, 

        legend: {
            display: false,
        }


    }
});
  }

  
}
