import { TestBed } from '@angular/core/testing';

import { NgLib2Service } from './ng-lib2.service';

describe('NgLib2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLib2Service = TestBed.get(NgLib2Service);
    expect(service).toBeTruthy();
  });
});
