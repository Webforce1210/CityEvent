import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBandeauComponent } from './view-bandeau.component';

describe('ViewBandeauComponent', () => {
  let component: ViewBandeauComponent;
  let fixture: ComponentFixture<ViewBandeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBandeauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
