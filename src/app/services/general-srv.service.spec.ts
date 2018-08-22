import { TestBed, inject } from '@angular/core/testing';

import { GeneralSrvService } from './general-srv.service';

describe('GeneralSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralSrvService]
    });
  });

  it('should be created', inject([GeneralSrvService], (service: GeneralSrvService) => {
    expect(service).toBeTruthy();
  }));
});
