import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSliderComponent } from './calendar-slider.component';

describe('CalendarSliderComponent', () => {
  let component: CalendarSliderComponent;
  let fixture: ComponentFixture<CalendarSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
