import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFloComponent } from './footer-flo.component';

describe('FooterFloComponent', () => {
  let component: FooterFloComponent;
  let fixture: ComponentFixture<FooterFloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
