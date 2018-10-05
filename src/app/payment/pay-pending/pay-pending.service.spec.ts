import { TestBed, inject } from '@angular/core/testing';

import { PayPendingService } from './pay-pending.service';

describe('PayPendingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayPendingService]
    });
  });

  it('should be created', inject([PayPendingService], (service: PayPendingService) => {
    expect(service).toBeTruthy();
  }));
});
