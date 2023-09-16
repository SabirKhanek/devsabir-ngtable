import { TestBed } from '@angular/core/testing';

import { NgTableService } from './ng-table.service';

describe('NgTableService', () => {
  let service: NgTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
