import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxComponentsComponent } from './dx-components/dx-components.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DxComponentsComponent
  },
  // { path: 'dictionaries', component: EnvironmentManagerComponent }
];

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [DxComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DxComponentsModule { }
