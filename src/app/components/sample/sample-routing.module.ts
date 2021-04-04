import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SampleComponent} from '../sample/sample-component/sample-component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'sample-component',
    component: SampleComponent,
    data: {title: 'sample-component', breadcrumb: 'sample-component'}
  }]
}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class SampleRoutingModule {
}
