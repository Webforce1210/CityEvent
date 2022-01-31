import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteDactiviteComponent } from './carte-dactivite.component';

describe('CarteDactiviteComponent', () => {
  let component: CarteDactiviteComponent;
  let fixture: ComponentFixture<CarteDactiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteDactiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteDactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
