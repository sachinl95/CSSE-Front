import { TestBed, inject } from '@angular/core/testing';

import { SuccessfullPaymentsService } from './successfull-payments.service';

describe('SuccessfullPaymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessfullPaymentsService]
    });
  });

  it('should be created', inject([SuccessfullPaymentsService], (service: SuccessfullPaymentsService) => {
    expect(service).toBeTruthy();
  }));
});
