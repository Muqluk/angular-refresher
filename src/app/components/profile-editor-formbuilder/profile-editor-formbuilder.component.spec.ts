import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorFormbuilderComponent } from './profile-editor-formbuilder.component';

describe('ProfileEditorFormbuilderComponent', () => {
  let component: ProfileEditorFormbuilderComponent;
  let fixture: ComponentFixture<ProfileEditorFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditorFormbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
