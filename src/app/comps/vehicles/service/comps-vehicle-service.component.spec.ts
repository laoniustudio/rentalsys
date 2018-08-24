import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsVehicleServiceComponent } from './comps-vehicle-service.component';

describe('CompsVehicleServiceComponent', () => {
  let component: CompsVehicleServiceComponent;
  let fixture: ComponentFixture<CompsVehicleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsVehicleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsVehicleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
