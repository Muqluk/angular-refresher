import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxComponentsModule } from '../modules';
// import { DictionariesModule } from './dictionaries/dictionaries.module';

// for lazy loading, we can turn this on when we convert more of the app
// for now getting .net mvc to play nice with lazy loaded files is not simple
/* const routes: Routes = [
  {
    path: 'time-capture', loadChildren: () =>
      import('./appointment-time-capture/appointment-time-capture.module')
        .then(m => m.AppointmentTimeCaptureModule)
  },
  // { path: '**', component: PageNotFoundComponent }
]; */

const routes: Routes = [
  {
    path: '',
    loadChildren: () => DxComponentsModule,
  }
  // {
  //   path: 'dictionaries', loadChildren: () => DictionariesModule
  // },
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
