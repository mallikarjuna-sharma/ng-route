import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRouteComponent } from './first-route.component';

describe('FirstRouteComponent', () => {
  let component: FirstRouteComponent;
  let fixture: ComponentFixture<FirstRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstRouteComponent]
    });
    fixture = TestBed.createComponent(FirstRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
