import { Component } from '@angular/core';
import { MenuService, MenuConfig } from '../Menu.service';

declare var QuickNav: any;


@Component({
  selector: 'metronic-quickmenu',
  templateUrl: 'quick-menu.component.html',
  moduleId: module.id
})
export class QuickMenuComponent {
  menuService: MenuService;
  settings: any;
  constructor(private ms: MenuService) {
    this.menuService = ms;
    this.settings = this.menuService.Settings;
    setTimeout(() => {
      QuickNav.init();
    }, 200);
  }
}
