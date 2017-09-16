import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittycastingComponent } from './bittycasting.component';

describe('BittycastingComponent', () => {
  let component: BittycastingComponent;
  let fixture: ComponentFixture<BittycastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittycastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittycastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
