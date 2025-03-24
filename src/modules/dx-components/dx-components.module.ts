import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxComponentsComponent, Pane, Tab } from './dx-components/dx-components.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DxComponentsComponent
  },
  // { path: 'dictionaries', component: EnvironmentManagerComponent }
];

@NgModule({
  declarations: [
    DxComponentsComponent,
    Pane,
    Tab,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DxComponentsModule { }
