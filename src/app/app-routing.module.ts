import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxComponentsModule } from '../modules';

const routes: Routes = [
  { path: 'dx-components', loadChildren: () => DxComponentsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
