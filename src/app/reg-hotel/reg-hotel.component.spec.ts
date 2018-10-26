import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegHotelComponent } from './reg-hotel.component';

describe('RegHotelComponent', () => {
  let component: RegHotelComponent;
  let fixture: ComponentFixture<RegHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
