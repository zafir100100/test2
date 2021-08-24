import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Report1OutputModel } from '../models/report1-output.model';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class Report1Service {

  url: string = "https://localhost:44305/";

  constructor(private httpcall: HttpClient) { }

  GetReport1() {
    return this.httpcall.get<Report1OutputModel[]>(this.url + 'api/Employees/report1', headerOption);
  }
}
