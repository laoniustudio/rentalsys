import { TestBed, inject } from '@angular/core/testing';

import { VehicleSrvService } from './vehicle-srv.service';

describe('VehicleSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleSrvService]
    });
  });

  it('should be created', inject([VehicleSrvService], (service: VehicleSrvService) => {
    expect(service).toBeTruthy();
  }));
});
