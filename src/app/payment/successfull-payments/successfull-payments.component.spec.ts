import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullPaymentsComponent } from './successfull-payments.component';

describe('SuccessfullPaymentsComponent', () => {
  let component: SuccessfullPaymentsComponent;
  let fixture: ComponentFixture<SuccessfullPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
