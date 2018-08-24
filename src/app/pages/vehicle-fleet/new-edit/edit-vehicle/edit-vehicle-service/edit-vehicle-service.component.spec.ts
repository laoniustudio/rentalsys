import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehicleServiceComponent } from './edit-vehicle-service.component';

describe('EditVehicleServiceComponent', () => {
  let component: EditVehicleServiceComponent;
  let fixture: ComponentFixture<EditVehicleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehicleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVehicleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
