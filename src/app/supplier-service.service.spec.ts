import { TestBed, inject } from '@angular/core/testing';

import { SupplierServiceService } from './supplier-service.service';

describe('SupplierServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierServiceService]
    });
  });

  it('should be created', inject([SupplierServiceService], (service: SupplierServiceService) => {
    expect(service).toBeTruthy();
  }));
});
