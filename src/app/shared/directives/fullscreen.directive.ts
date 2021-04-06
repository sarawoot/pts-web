import { Directive, HostListener } from '@angular/core';
declare var require: any;
const screenfull = require('screenfull');
@Directive({
  selector: '[toggleFullscreen]',
})
export class ToggleFullscreenDirective {
  @HostListener('click') onClick(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
