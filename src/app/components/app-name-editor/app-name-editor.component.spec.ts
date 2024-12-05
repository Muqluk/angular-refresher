import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNameEditorComponent } from './app-name-editor.component';

describe('AppNameEditorComponent', () => {
  let component: AppNameEditorComponent;
  let fixture: ComponentFixture<AppNameEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppNameEditorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
