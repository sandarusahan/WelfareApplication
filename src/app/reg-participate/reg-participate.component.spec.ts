import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegParticipateComponent } from './reg-participate.component';

describe('RegParticipateComponent', () => {
  let component: RegParticipateComponent;
  let fixture: ComponentFixture<RegParticipateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegParticipateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
