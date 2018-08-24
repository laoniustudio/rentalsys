import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehicleIdComponent } from './edit-vehicle-id.component';

describe('EditVehicleIdComponent', () => {
  let component: EditVehicleIdComponent;
  let fixture: ComponentFixture<EditVehicleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVehicleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVehicleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
