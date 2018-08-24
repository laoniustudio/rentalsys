import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehicleGeneralComponent } from './edit-vehicle-general.component';

describe('EditVehicleGeneralComponent', () => {
  let component: EditVehicleGeneralComponent;
  let fixture: ComponentFixture<EditVehicleGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehicleGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVehicleGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
