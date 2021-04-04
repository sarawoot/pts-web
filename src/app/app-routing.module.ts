import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {environment} from '../environments/environment';

import {ContentLayoutComponent} from './shared/components/layout/content-layout/content-layout.component';
import {content} from './shared/routes/content-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.homePath,
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
  },
  {
    path: '**',
    redirectTo: environment.homePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
