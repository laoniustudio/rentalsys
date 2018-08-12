import { TestBed, inject } from '@angular/core/testing';

import { LabelSrvService } from './label-srv.service';

describe('LabelSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelSrvService]
    });
  });

  it('should be created', inject([LabelSrvService], (service: LabelSrvService) => {
    expect(service).toBeTruthy();
  }));
});
