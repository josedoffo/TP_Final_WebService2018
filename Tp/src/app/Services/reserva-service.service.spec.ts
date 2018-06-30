import { TestBed, inject } from '@angular/core/testing';

import { ReservaServiceService } from './reserva-service.service';

describe('ReservaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservaServiceService]
    });
  });

  it('should be created', inject([ReservaServiceService], (service: ReservaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
