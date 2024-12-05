import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNameEditorComponent } from './components/app-name-editor/app-name-editor.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ProfileEditorFormbuilderComponent } from './components/profile-editor-formbuilder/profile-editor-formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    AppNameEditorComponent,
    ProfileEditorComponent,
    ProfileEditorFormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
