import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandeauComponent } from './edit-bandeau.component';

describe('EditBandeauComponent', () => {
  let component: EditBandeauComponent;
  let fixture: ComponentFixture<EditBandeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBandeauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
