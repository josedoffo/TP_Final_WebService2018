import { TestBed, inject } from '@angular/core/testing';

import { NovedadServiceService } from './novedad-service.service';

describe('NovedadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovedadServiceService]
    });
  });

  it('should be created', inject([NovedadServiceService], (service: NovedadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
