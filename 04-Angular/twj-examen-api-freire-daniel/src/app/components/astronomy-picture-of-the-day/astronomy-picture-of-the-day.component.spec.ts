import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyPictureOfTheDayComponent } from './astronomy-picture-of-the-day.component';

describe('AstronomyPictureOfTheDayComponent', () => {
  let component: AstronomyPictureOfTheDayComponent;
  let fixture: ComponentFixture<AstronomyPictureOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomyPictureOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomyPictureOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
