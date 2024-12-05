import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxFormModule,
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevextremeFormOneComponent } from './components/devextreme-form-one/devextreme-form-one.component';
import { DevextremeFormeTwoComponent } from './components/devextreme-forme-two/devextreme-forme-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DevextremeFormOneComponent,
    DevextremeFormeTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
