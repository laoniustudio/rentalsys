import { TestBed, inject } from '@angular/core/testing';

import { ResolverSrvService } from './resolver-srv.service';

describe('ResolverSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolverSrvService]
    });
  });

  it('should be created', inject([ResolverSrvService], (service: ResolverSrvService) => {
    expect(service).toBeTruthy();
  }));
});
