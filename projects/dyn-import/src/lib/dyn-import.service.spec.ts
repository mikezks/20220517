import { TestBed } from '@angular/core/testing';

import { DynImportService } from './dyn-import.service';

describe('DynImportService', () => {
  let service: DynImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
