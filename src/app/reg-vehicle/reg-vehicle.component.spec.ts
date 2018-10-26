import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVehicleComponent } from './reg-vehicle.component';

describe('RegVehicleComponent', () => {
  let component: RegVehicleComponent;
  let fixture: ComponentFixture<RegVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
