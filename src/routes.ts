import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Hello} from './app/hello';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
})
export class Root {
}

const appRoutes: Routes = [
  {
    path: '',
    component: Hello
  }
];
export const routing = RouterModule.forRoot(appRoutes);
