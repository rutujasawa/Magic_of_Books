import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoLoginBookComponent } from './wo-login-book.component';

describe('WoLoginBookComponent', () => {
  let component: WoLoginBookComponent;
  let fixture: ComponentFixture<WoLoginBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoLoginBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoLoginBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
