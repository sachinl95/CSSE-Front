import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPendingComponent } from './pay-pending.component';

describe('PayPendingComponent', () => {
  let component: PayPendingComponent;
  let fixture: ComponentFixture<PayPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
