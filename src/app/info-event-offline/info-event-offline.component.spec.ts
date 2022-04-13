import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEventOfflineComponent } from './info-event-offline.component';

describe('InfoEventOfflineComponent', () => {
  let component: InfoEventOfflineComponent;
  let fixture: ComponentFixture<InfoEventOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEventOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEventOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
