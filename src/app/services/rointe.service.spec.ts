import { TestBed } from '@angular/core/testing';

import { RointeService } from './rointe.service';

describe('RointeService', () => {
  let service: RointeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RointeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
