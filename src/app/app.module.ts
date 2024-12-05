import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
