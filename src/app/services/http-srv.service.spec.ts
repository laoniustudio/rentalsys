import { TestBed, inject } from '@angular/core/testing';

import { HttpSrvService } from './http-srv.service';

describe('HttpSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSrvService]
    });
  });

  it('should be created', inject([HttpSrvService], (service: HttpSrvService) => {
    expect(service).toBeTruthy();
  }));
});
