import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMorseCodeComponent } from './learn-morse-code.component';

describe('LearnMorseCodeComponent', () => {
  let component: LearnMorseCodeComponent;
  let fixture: ComponentFixture<LearnMorseCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMorseCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMorseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
