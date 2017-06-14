import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationalPeriodComponent } from './rotational-period.component';

describe('RotationalPeriodComponent', () => {
  let component: RotationalPeriodComponent;
  let fixture: ComponentFixture<RotationalPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotationalPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationalPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
