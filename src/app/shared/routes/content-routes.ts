import {Routes} from '@angular/router';
import {HomeComponent} from '../../components/home/home.component';

export const content: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'หน้าแรก'}}, {
    path: 'sample',
    loadChildren: () => import('../../components/sample/sample.module')
                            .then(m => m.SampleModule),
    data: {breadcrumb: 'Sample'}
  }
];
