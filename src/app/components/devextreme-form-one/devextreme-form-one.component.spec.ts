import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevextremeFormOneComponent } from './devextreme-form-one.component';

describe('DevextremeFormOneComponent', () => {
  let component: DevextremeFormOneComponent;
  let fixture: ComponentFixture<DevextremeFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevextremeFormOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevextremeFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
