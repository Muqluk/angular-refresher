import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxSwitchModule,
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevextremeFormOneComponent } from './components/devextreme-form-one/devextreme-form-one.component';
import { CareSettingsComponent } from './components/devextreme-forme-two/care-settings/care-settings.component';
import { DevextremeFormeTwoComponent } from './components/devextreme-forme-two/devextreme-forme-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DevextremeFormOneComponent,
    DevextremeFormeTwoComponent,
    CareSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxFormModule,
    DxDataGridModule,
    DxSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
