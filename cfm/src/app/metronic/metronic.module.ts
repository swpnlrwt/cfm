import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SubmenuComponent } from './header/submenu.component';
import {RouterModule} from '@angular/router';
import {MenuService} from './menu.service';
import { QuickMenuComponent } from './quick-menu/quick-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Submenu2Component } from './sidebar/submenu2.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, SubmenuComponent, QuickMenuComponent, SidebarComponent, Submenu2Component],
  bootstrap: [],
  providers: [MenuService],
  exports: [HeaderComponent, SubmenuComponent, QuickMenuComponent, SidebarComponent, Submenu2Component]
})
export class MetronicModule { }
