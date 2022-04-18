import { TestBed } from '@angular/core/testing';

import { LinkFrontBackService } from './link-front-back.service';

describe('LinkFrontBackService', () => {
  let service: LinkFrontBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkFrontBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
