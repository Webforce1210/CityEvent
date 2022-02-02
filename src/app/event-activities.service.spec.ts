import { TestBed } from '@angular/core/testing';

import { EventActivitiesService } from './event-activities.service';

describe('EventActivitiesService', () => {
  let service: EventActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
