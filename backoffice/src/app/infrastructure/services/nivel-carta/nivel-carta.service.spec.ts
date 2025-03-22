import { TestBed } from '@angular/core/testing';

import { NivelCartaService } from './nivel-carta.service';

describe('NivelCartaService', () => {
  let service: NivelCartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelCartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
