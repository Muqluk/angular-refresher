import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxComponentsComponent } from './dx-components.component';

describe('DxComponentsComponent', () => {
  let component: DxComponentsComponent;
  let fixture: ComponentFixture<DxComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
