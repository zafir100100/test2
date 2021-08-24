import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Report1Component } from './components/report1/report1/report1.component';
import { Report2Component } from './components/report2/report2/report2.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "r1",
    pathMatch: "full"
  },
  {
    path: "r1",
    component: Report1Component
  },
  {
    path: "r2",
    component: Report2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
