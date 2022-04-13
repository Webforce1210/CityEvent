import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementinfosComponent } from './paiementinfos.component';

describe('PaiementinfosComponent', () => {
  let component: PaiementinfosComponent;
  let fixture: ComponentFixture<PaiementinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementinfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
