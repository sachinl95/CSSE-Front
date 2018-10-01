import { TestBed, inject } from '@angular/core/testing';

import { PendingPaymentsService } from './pending-payments.service';

describe('PendingPaymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingPaymentsService]
    });
  });

  it('should be created', inject([PendingPaymentsService], (service: PendingPaymentsService) => {
    expect(service).toBeTruthy();
  }));
});
