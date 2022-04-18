import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFloComponent } from './nav-flo.component';

describe('NavFloComponent', () => {
  let component: NavFloComponent;
  let fixture: ComponentFixture<NavFloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
