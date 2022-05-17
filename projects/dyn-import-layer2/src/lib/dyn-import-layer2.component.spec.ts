import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynImportLayer2Component } from './dyn-import-layer2.component';

describe('DynImportLayer2Component', () => {
  let component: DynImportLayer2Component;
  let fixture: ComponentFixture<DynImportLayer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynImportLayer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynImportLayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
