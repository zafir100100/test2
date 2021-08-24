import { Component, OnInit } from '@angular/core';
import { Report2Service } from 'src/app/services/report2.service';
import { Report1OutputModel } from 'src/app/models/report1-output.model';
import { FormControl, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Report2InputModel } from 'src/app/models/report2-input.model';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {

  report1List: Report1OutputModel[] = [];
  todayDate: Date = new Date();
  fDate: Date = new Date();
  tDate: Date = new Date();
  constructor(private report2Service: Report2Service) { }

  ngOnInit( ): void {
  }

  GetReport2() {
    console.log("1: " + this.fDate);
    console.log("2: " + this.tDate);

    let y: Report2InputModel = new Report2InputModel();
    y.dateFrom = this.fDate;
    y.dateTo = this.tDate;
    this.report2Service.GetReport2(y).subscribe(
      (data: Report1OutputModel[]) => {
        this.report1List = data;
        console.log("here is log "+data);

      }
    );
  }

  GetDateString(ip: Date): string {
    return [('0' + new Date(ip).getDate()).slice(-2), ('0' + (new Date(ip).getMonth() + 1)).slice(-2), new Date(ip).getFullYear()].join('/');
  }
}
