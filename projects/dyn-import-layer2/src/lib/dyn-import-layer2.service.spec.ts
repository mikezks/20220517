import { TestBed } from '@angular/core/testing';

import { DynImportLayer2Service } from './dyn-import-layer2.service';

describe('DynImportLayer2Service', () => {
  let service: DynImportLayer2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynImportLayer2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
