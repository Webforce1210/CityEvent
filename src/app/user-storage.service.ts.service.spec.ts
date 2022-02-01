import { TestBed } from '@angular/core/testing';

import { UserStorage.Service.TsService } from './user-storage.service.ts.service';

describe('UserStorage.Service.TsService', () => {
  let service: UserStorage.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStorage.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
