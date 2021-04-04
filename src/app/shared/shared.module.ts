import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {FeatherIconsComponent} from './components/feather-icons/feather-icons.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ContentLayoutComponent} from './components/layout/content-layout/content-layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
// Directives
import {ToggleFullscreenDirective} from './directives/fullscreen.directive';
// services
import {NavService} from './services/nav.service';

@NgModule({
  declarations: [
    HeaderComponent, FooterComponent, SidebarComponent, ContentLayoutComponent,
    FeatherIconsComponent, BreadcrumbComponent, ToggleFullscreenDirective
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    FeatherIconsComponent,
  ],
  providers: [NavService]
})
export class SharedModule {
}
