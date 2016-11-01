import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Employee }           from './employee';

@Injectable()
export class EmployeeSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Employee[]> {
    return this.http
               .get(`app/employees/?name=${term}`)
               .map((r: Response) => r.json().data as Employee[]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
