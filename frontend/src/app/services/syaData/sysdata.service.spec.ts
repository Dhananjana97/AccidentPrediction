import { TestBed } from '@angular/core/testing';

import { SysdataService } from './sysdata.service';

describe('SysdataService', () => {
  let service: SysdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
