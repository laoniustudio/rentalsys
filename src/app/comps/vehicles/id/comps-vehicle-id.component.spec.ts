import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsVehicleIdComponent } from './comps-vehicle-id.component';

describe('CompsVehicleIdComponent', () => {
  let component: CompsVehicleIdComponent;
  let fixture: ComponentFixture<CompsVehicleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsVehicleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsVehicleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
