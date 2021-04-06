import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserListComponent,
        data: { breadcrumb: 'รายการผู้ใช้งาน' },
      },
      {
        path: 'new',
        component: UserNewComponent,
        data: { breadcrumb: 'เพิ่มผู้ใช้งาน' },
      },
      {
        path: ':id/edit',
        component: UserEditComponent,
        data: { breadcrumb: 'แก้ไข้ผู้ใช้งาน' },
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class UserRoutingModule {}
