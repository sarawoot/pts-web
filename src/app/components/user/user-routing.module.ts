import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserListComponent } from "./user-list/user-list.component";
import { UserNewComponent } from "./user-new/user-new.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

const routes: Routes = [
  {
    path: "users",
    children: [
      {
        path: "",
        component: UserListComponent,
        data: { title: "sample-component", breadcrumb: "sample-component" },
      },
      {
        path: "new",
        component: UserNewComponent,
        data: { title: "sample-component", breadcrumb: "sample-component" },
      },
      {
        path: "/:id/edit",
        component: UserEditComponent,
        data: { title: "sample-component", breadcrumb: "sample-component" },
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class UserRoutingModule {}
