import {Component} from '@angular/core';
import {IrdataListComponent} from './irkit/irdata-list.component';

@Component({
  selector: 'App',
  template: require('./hello.html'),
  directives:[ IrdataListComponent]
})
export class Hello {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
