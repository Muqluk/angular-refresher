import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareSettingsComponent } from './care-settings.component';

describe('CareSettingsComponent', () => {
  let component: CareSettingsComponent;
  let fixture: ComponentFixture<CareSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
