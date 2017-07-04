/**
 * Created by swapnilr on 7/4/2017.
 */

import {MenuConfig, MenuService} from 'app/metronic/menu.service';

export class DataProvider {
  menuService: MenuService;

  constructor(private ms: MenuService) {
    this.menuService = ms;
    const cfg = new MenuConfig();
    cfg.position = 1;
    cfg.Name = 'Main menu 1';
    cfg.Exec = (selected: MenuConfig) => {
      alert('test');
    };
    cfg.IconClass = 'icon-magnifier';
    cfg.Route = '';
    cfg.Children = [{
      position: 1, Name: 'Sub menu 1', Exec: (selected: MenuConfig) => {
        alert('Test from submenu');
      }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: ''
    }];
    this.menuService.add('user', cfg);

    this.menuService.add('languages', {
      position: 1, Name: 'English', Exec: (selected: MenuConfig) => {
        alert('English');
      }, Children: null, IconClass: null, IconSource: '/assets/global/img/flags/us.png', showInMenu: true, Route: ''
    });
    this.menuService.add('languages', {
      position: 1, Name: 'French', Exec: (selected: MenuConfig) => {
        alert('French');
      }, Children: null, IconClass: null, IconSource: '/assets/global/img/flags/fr.png', showInMenu: true, Route: ''
    });
    this.menuService.add('languages', {
      position: 1, Name: 'German', Exec: (selected: MenuConfig) => {
        alert('German');
      }, Children: null, IconClass: null, IconSource: '/assets/global/img/flags/de.png', showInMenu: true, Route: ''
    });
    this.menuService.add('languages', {
      position: 1, Name: 'Russian', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, Children: null, IconClass: null, IconSource: '/assets/global/img/flags/ru.png', showInMenu: true, Route: ''
    });
    this.menuService.add('alerts', {
      position: 1, Name: 'Alert 1', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
    });
    this.menuService.add('alerts', {
      position: 1, Name: 'Alert 2', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
    });
    this.menuService.add('alerts', {
      position: 1, Name: 'Alert 3', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
    });

    this.menuService.add('left', {
      position: 1, Name: 'Menu 1', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
    });
    this.menuService.add('left', {
      position: 1, Name: 'Menu 2', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
    });
    this.menuService.add('left', {
      position: 1, Name: 'Menu 3', Exec: (selected: MenuConfig) => {
        alert('Russian');
      }, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '', Children: [
        {
          position: 1, Name: 'Menu 3.1', Exec: (selected: MenuConfig) => {
          alert('Russian');
        }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/projects'
        },
        {
          position: 1, Name: 'Menu 3.2', Exec: (selected: MenuConfig) => {
          alert('Russian');
        }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/projects'
        },
        {
          position: 1, Name: 'Menu 3.3', Exec: (selected: MenuConfig) => {
          alert('Russian');
        }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
        }
      ]
    });

    this.menuService.add('quick', {
      position: 1, Name: 'Quick Menu 1', Exec: (selected: MenuConfig) => {
        alert('Quick Menu 1');
      }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
    });
    this.menuService.add('quick', {
      position: 1, Name: 'Quick Menu 2', Exec: (selected: MenuConfig) => {
        alert('Quick Menu 2');
      }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
    });
  }
}
