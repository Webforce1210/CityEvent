import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOfflineComponent } from './navbar-offline.component';

describe('NavbarOfflineComponent', () => {
  let component: NavbarOfflineComponent;
  let fixture: ComponentFixture<NavbarOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
