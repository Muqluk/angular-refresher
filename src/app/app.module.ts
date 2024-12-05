import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { AppNameEditorComponent } from './app-name-editor/app-name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    AppNameEditorComponent,
    ProfileEditorComponent
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
