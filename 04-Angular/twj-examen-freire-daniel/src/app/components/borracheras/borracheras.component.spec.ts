import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorracherasComponent } from './borracheras.component';

describe('BorracherasComponent', () => {
  let component: BorracherasComponent;
  let fixture: ComponentFixture<BorracherasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorracherasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorracherasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
