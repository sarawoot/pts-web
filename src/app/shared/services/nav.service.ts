import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscriber} from 'rxjs';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public screenWidth: any;
  public collapseSidebar = false;

  constructor() {
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
  }

  MENUITEMS: Menu[] = [];
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  // Windows width
  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.screenWidth = window.innerWidth;
  }
}
