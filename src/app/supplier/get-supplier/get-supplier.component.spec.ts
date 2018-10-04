import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSupplierComponent } from './get-supplier.component';

describe('GetSupplierComponent', () => {
  let component: GetSupplierComponent;
  let fixture: ComponentFixture<GetSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
