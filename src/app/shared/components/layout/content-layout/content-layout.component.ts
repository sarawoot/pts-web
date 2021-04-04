import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import * as feather from 'feather-icons';

import {CustomizerService} from '../../../services/customizer.service';
import {NavService} from '../../../services/nav.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {
  constructor(
      public navServices: NavService, public customizer: CustomizerService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      feather.replace();
    });
  }
}
