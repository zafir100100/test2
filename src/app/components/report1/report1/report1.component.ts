import { Component, OnInit } from '@angular/core';
import { Report1Service } from 'src/app/services/report1.service';
import { Report1OutputModel } from 'src/app/models/report1-output.model';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {
  report1List: Report1OutputModel[] = [];
  constructor(private report1Service: Report1Service) { }

  ngOnInit(): void {
    this.GetReport1();
  }

  GetReport1() {
    this.report1Service.GetReport1().subscribe(
      (data: Report1OutputModel[]) => {
        this.report1List = data;
      }
    );
  }

  GetDateString(ip: Date): string {
    return [('0' + new Date(ip).getDate()).slice(-2), ('0' + (new Date(ip).getMonth() + 1)).slice(-2), new Date(ip).getFullYear()].join('/');
  }
}
