import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employees = [
      {id: 18, name: 'Dr IQ', currentLevel: 6, lastLevel: 6, topLevel: 9},
      {id: 15, name: 'Magneta', currentLevel: 5, lastLevel: 6, topLevel: 2},
      {id: 11, name: 'Mr. Nice', currentLevel: 5, lastLevel: 4, topLevel: 6},
      {id: 14, name: 'Celeritas', currentLevel: 4, lastLevel: 5, topLevel: 5},
      {id: 16, name: 'RubberMan', currentLevel: 4, lastLevel: 2, topLevel: 6},
      {id: 17, name: 'Dynama', currentLevel: 3, lastLevel: 3, topLevel: 5},
      {id: 19, name: 'Magma', currentLevel: 2, lastLevel: 1, topLevel: 6},
      {id: 20, name: 'Tornado', currentLevel: 1, lastLevel: 2, topLevel: 1},
      {id: 12, name: 'Narco', currentLevel: 0, lastLevel: 2, topLevel: 10},
    ];
    return {employees};
  }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
