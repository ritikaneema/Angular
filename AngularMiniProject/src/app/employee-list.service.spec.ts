import { TestBed } from '@angular/core/testing';

import { EmployeeListService } from './employee-list.service';

describe('UpdateService', () => {
  let service: EmployeeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
