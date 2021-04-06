import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/content-routes';

import { LoginComponent } from './components/login/login.component';
import { full } from './shared/routes/full.routes';

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
    path: '',
    component: LoginComponent,
    children: full,
  },
  {
    path: '**',
    redirectTo: environment.homePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
