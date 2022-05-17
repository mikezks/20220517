import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynImportComponent } from './dyn-import.component';

describe('DynImportComponent', () => {
  let component: DynImportComponent;
  let fixture: ComponentFixture<DynImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
