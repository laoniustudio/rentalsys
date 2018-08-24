import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsVehicleGeneralComponent } from './comps-vehicle-general.component';

describe('CompsVehicleGeneralComponent', () => {
  let component: CompsVehicleGeneralComponent;
  let fixture: ComponentFixture<CompsVehicleGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsVehicleGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsVehicleGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
