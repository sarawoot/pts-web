import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { environment } from '../../../../environments/environment';

const body = document.getElementsByTagName('body')[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuItems: Menu[];
  public items: Menu[];
  public openNav = false;
  public rightSidebar = false;
  public text: string;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService, private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
  }

  collapseSidebar(): void {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  logout(): void {
    this.tokenService.clear();
    window.location.pathname = environment.loginPath;
  }
}
