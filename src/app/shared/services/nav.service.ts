import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  public fullScreen = false;

  constructor() {
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
  }
  // Windows width
  @HostListener('window:resize', ['$event'])
  MENUITEMS: Menu[] = [
    { title: 'หน้าแรก', icon: 'home', path: environment.homePath, type: 'link', active: false },
    { title: 'ผู้ใช้งาน', icon: 'users', path: environment.userPath, type: 'link', active: false },
  ];
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  onResize(event?: any): void {
    this.screenWidth = window.innerWidth;
  }
}
