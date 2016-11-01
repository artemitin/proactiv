import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Employee }                from './employee';
import { EmployeeService }         from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'my-employees',
  templateUrl: 'html/employees.component.html',
  styleUrls: [ 'css/employees.component.css' ]
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  getEmployees(): void {
    this.employeeService
        .getEmployees()
        .then(employees => this.employees = employees);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.create(name)
      .then(employee => {
        this.employees.push(employee);
        this.selectedEmployee = null;
      });
  }

  delete(employee: Employee): void {
    this.employeeService
        .delete(employee.id)
        .then(() => {
          this.employees = this.employees.filter(h => h !== employee);
          if (this.selectedEmployee === employee) { this.selectedEmployee = null; }
        });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  promote(employee: Employee): void {
    employee.currentLevel += 1;
    this.employeeService
        .update(employee)
        .then((e) => {
          this.selectedEmployee = e;
        });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEmployee.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
