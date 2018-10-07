import { TestBed, inject } from '@angular/core/testing';

import { GetRequestServiceService } from './get-request-service.service';

describe('GetRequestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRequestServiceService]
    });
  });

  it('should be created', inject([GetRequestServiceService], (service: GetRequestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
