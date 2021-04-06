import { Routes } from '@angular/router';

import { environment } from '../../../environments/environment';

import { HomeComponent } from '../../components/home/home.component';
import { AuthGuard } from '../guard/auth.guard';

export const content: Routes = [
  {
    path: environment.homePath.replace('/', ''),
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { title: 'หน้าแรก', breadcrumb: 'หน้าแรก' },
    pathMatch: 'full',
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../components/user/user.module').then((m) => m.UserModule),
    data: { title: 'ผู้ใช้งาน' },
  },
];
