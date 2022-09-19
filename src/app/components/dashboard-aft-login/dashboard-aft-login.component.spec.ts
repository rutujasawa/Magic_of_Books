import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAftLoginComponent } from './dashboard-aft-login.component';

describe('DashboardAftLoginComponent', () => {
  let component: DashboardAftLoginComponent;
  let fixture: ComponentFixture<DashboardAftLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAftLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAftLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
