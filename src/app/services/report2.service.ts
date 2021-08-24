import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Report1OutputModel } from '../models/report1-output.model';
import { Report2InputModel } from '../models/report2-input.model';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class Report2Service {

  url: string = "https://localhost:44305/";

  constructor(private httpcall: HttpClient) { }

  GetReport2(x: Report2InputModel) {
    return this.httpcall.post<Report1OutputModel[]>(this.url + 'api/Employees/report2', x, headerOption);
  }
}
