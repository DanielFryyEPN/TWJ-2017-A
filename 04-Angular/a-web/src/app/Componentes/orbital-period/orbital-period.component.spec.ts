import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitalPeriodComponent } from './orbital-period.component';

describe('OrbitalPeriodComponent', () => {
  let component: OrbitalPeriodComponent;
  let fixture: ComponentFixture<OrbitalPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitalPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitalPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
