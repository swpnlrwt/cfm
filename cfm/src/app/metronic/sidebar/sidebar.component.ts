import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService, MenuConfig } from '../Menu.service';

declare var App: any;
declare var Layout: any;

@Component({
  selector: 'metronic-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: [ 'sidebar.component.css'],
  moduleId: module.id
})
export class SidebarComponent {
  private name = 'SidebarComponent';
  menuService: MenuService;
  settings: any;

  constructor(private ms: MenuService, private router: Router) {
    this.menuService = ms;
    this.settings = this.menuService.Settings;
    setTimeout(() => {
      App.init();
      App.initComponents();
      Layout.init();
      router.events.subscribe((val) => {
        Layout.setAngularJsSidebarMenuActiveLink('match', null, null);
        // Layout.handleClick(null);
      });
      // Layout.setAngularJsSidebarMenuActiveLink('match', null, null);
    }, 400); // init metronic core componets

  }

}

