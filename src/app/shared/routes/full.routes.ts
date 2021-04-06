import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { environment } from '../../../environments/environment';

export const full: Routes = [
  {
    path: environment.loginPath.replace('/', ''),
    component: LoginComponent,
  },
];
