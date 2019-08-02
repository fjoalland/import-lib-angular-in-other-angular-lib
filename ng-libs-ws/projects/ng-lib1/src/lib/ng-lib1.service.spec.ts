import { TestBed } from '@angular/core/testing';

import { NgLib1Service } from './ng-lib1.service';

describe('NgLib1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLib1Service = TestBed.get(NgLib1Service);
    expect(service).toBeTruthy();
  });
});
