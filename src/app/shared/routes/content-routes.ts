import {Routes} from '@angular/router';

import {environment} from '../../../environments/environment';

import {HomeComponent} from '../../components/home/home.component';


export const content: Routes = [
  {
    path: environment.homePath.replace('/', ''),
    component: HomeComponent,
    data: {title: 'หน้าแรก'}
  },
  {
    path: 'sample',
    loadChildren: () => import('../../components/sample/sample.module')
                            .then(m => m.SampleModule),
    data: {breadcrumb: 'Sample'}
  }
];
