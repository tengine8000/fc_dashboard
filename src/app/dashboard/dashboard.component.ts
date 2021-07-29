import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe(
      res=>{
        this.data=res
        console.log(res);
        
      }
    )
  }
  ngOnInit() {

  }

}
