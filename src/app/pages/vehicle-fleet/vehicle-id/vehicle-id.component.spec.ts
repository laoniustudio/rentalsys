import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleIdComponent } from './vehicle-id.component';

describe('VehicleIdComponent', () => {
  let component: VehicleIdComponent;
  let fixture: ComponentFixture<VehicleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
