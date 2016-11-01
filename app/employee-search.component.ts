import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { EmployeeSearchService } from './employee-search.service';
import { Employee } from './employee';

@Component({
  moduleId: module.id,
  selector: 'employee-search',
  templateUrl: 'html/employee-search.component.html',
  //styleUrls: [ 'employee-search.component.css' ],
  providers: [EmployeeSearchService]
})
export class EmployeeSearchComponent implements OnInit {
  employees: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private employeeSearchService: EmployeeSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.employees = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.employeeSearchService.search(term)
        // or the observable of empty employees if no search term
        : Observable.of<Employee[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Employee[]>([]);
      });
  }

  gotoDetail(employee: Employee): void {
    let link = ['/detail', employee.id];
    this.router.navigate(link);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
