import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPurchasesComponent } from './create-order.component';

describe('RequestPurchasesComponent', () => {
  let component: RequestPurchasesComponent;
  let fixture: ComponentFixture<RequestPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
