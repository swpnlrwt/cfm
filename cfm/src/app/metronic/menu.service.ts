import { Injectable, Inject } from '@angular/core';

export class MenuConfig {
  showInMenu = true;
  position = 0;
  Name: string;
  Exec: (selected: MenuConfig) => void;
  Route: string;
  Children: MenuConfig[];
  IconClass: string;
  IconSource: string;
}

@Injectable()
export class MenuService {
  menus: any;
  activeMenus: any;

  constructor(
    // @Inject("menu.config") private menuConfig: MenuConfig
  ) {
    this.menus = {
      alerts: [],
      languages: [],
      user: [],
      left: [],
      quick: []
    }
    this.activeMenus = {
      alerts: 0,
      languages: 0,
      user: 0,
      left: 0,
      quick: 0
    }
  }

  get Settings(): any {
    return {
      layout: {
        pageSidebarClosed: false, // sidebar menu state
        pageContentWhite: true, // set page content layout
        pageBodySolid: false, // solid body color state
        pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
      },
      assetsPath: '/assets',
      globalPath: '/assets/global',
      layoutPath: '/assets/layouts/layout',
    };
  }

  getMenuConfig(location: string): any {
    if (!this.menus[location]) {return null; }
    return this.menus[location];
  }

  add(location: string, newconfig: MenuConfig): void {
    if (this.menus[location]) {
      this.menus[location].push(newconfig);
      newconfig.position = this.menus[location].length - 1;
    }
  }
  insert(location: string, position: number, newconfig: MenuConfig): void {
    if (this.menus[location]) {
      this.menus[location].splice(position, 0, newconfig);
      newconfig.position = position;
    }
  }
  update(location: string, config: any) {
    if (this.menus[location] && config.position >= 0 && config.position < this.menus[location].length) {
      Object.assign(this.menus[location][config.position], config);
    }
  }
  setActive(location: string, index: number) {
    if (this.menus[location] && index >= 0 && index < this.menus[location].length) {
      this.activeMenus[location] = index;
    }
  }
  getActive(location: string): MenuConfig {
    if (this.menus[location]) {
      const idx = this.activeMenus[location];
      if (idx >= 0 && idx < this.menus[location].length) {
        return this.menus[location][idx];
      } else if (this.menus[location].length > 0) {return this.menus[location][0]; }
      return null;
    }
  }

}
