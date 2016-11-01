import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { EmployeesComponent }      from './employees.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { EmployeeService }          from './employee.service';
import { EmployeeSearchComponent }  from './employee-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: EmployeeDetailComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeDetailComponent,
    EmployeesComponent,
    EmployeeSearchComponent
  ],
  providers: [
    EmployeeService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
