import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {errorInterceptorProviders} from './helpers/error.interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports:
      [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [authInterceptorProviders, errorInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
