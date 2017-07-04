import { Component } from '@angular/core';
import { MenuService, MenuConfig } from '../Menu.service';

@Component({
  moduleId: module.id,
  selector: 'metronic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuService: MenuService;
  settings: any;
  constructor(private ms: MenuService) {
    this.menuService = ms;
    this.settings = this.menuService.Settings;
  }

}
