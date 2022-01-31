import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilDactuComponent } from './fil-dactu.component';

describe('FilDactuComponent', () => {
  let component: FilDactuComponent;
  let fixture: ComponentFixture<FilDactuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilDactuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilDactuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
