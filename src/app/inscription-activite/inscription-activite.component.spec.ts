import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionActiviteComponent } from './inscription-activite.component';

describe('InscriptionActiviteComponent', () => {
  let component: InscriptionActiviteComponent;
  let fixture: ComponentFixture<InscriptionActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
