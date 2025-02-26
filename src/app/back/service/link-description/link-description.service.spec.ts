import { TestBed } from '@angular/core/testing';

import { LinkDescriptionService } from './link-description.service';

describe('LinkDescriptionService', () => {
  let service: LinkDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
