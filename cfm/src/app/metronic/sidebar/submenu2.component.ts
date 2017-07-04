import { Component, Input } from '@angular/core';

@Component({
  selector: '[metronic-submenu2]',
  templateUrl: 'submenu2.component.html',
  styleUrls: [ 'submenu2.component.css'],
  moduleId: module.id
})
export class Submenu2Component {
  private name = 'Submenu2Component';
  @Input('metronic-submenu2') submenu: any;

}
