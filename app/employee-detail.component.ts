import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Employee }        from './employee';
import { EmployeeService } from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'my-employee-detail',
  templateUrl: 'html/employee-detail.component.html',
  //styleUrls: [ 'employee-detail.component.css' ]
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.employeeService.getEmployee(id)
        .then(employee => this.employee = employee);
    });
  }

  save(): void {
    this.employeeService.update(this.employee)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
