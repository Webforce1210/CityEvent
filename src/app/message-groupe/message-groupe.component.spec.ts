import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGroupeComponent } from './message-groupe.component';

describe('MessageGroupeComponent', () => {
  let component: MessageGroupeComponent;
  let fixture: ComponentFixture<MessageGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
