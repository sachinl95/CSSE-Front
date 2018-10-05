import { TestBed, inject } from '@angular/core/testing';

import { PaymentSharedService } from './payment-shared.service';

describe('PaymentSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentSharedService]
    });
  });

  it('should be created', inject([PaymentSharedService], (service: PaymentSharedService) => {
    expect(service).toBeTruthy();
  }));
});
