import { Component, Input } from '@angular/core';
import { MenuConfig } from '../Menu.service';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: '[metronic-submenu]',
  templateUrl: 'submenu.component.html',
  styleUrls: [ 'submenu.component.css'],
  moduleId: module.id
})
export class SubmenuComponent {
  private name = 'SubmenuComponent';
  @Input('metronic-submenu') submenu: any;
}
