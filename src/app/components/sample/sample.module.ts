import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SampleComponent} from '../sample/sample-component/sample-component';

import {SampleRoutingModule} from './sample-routing.module';

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule, SampleRoutingModule]
})
export class SampleModule {
}
