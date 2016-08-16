/// <reference path="../typings/index.d.ts"/>
import { NgModule }       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {Hello} from './app/hello';
import 'zone.js/dist/zone';

import './index.styl';
import {enableProdMode,ApplicationRef} from '@angular/core';
import {Root,routing} from './routes';

import {MdCardModule} from '@angular2-material/card/card';
import {MdButtonModule} from '@angular2-material/button/button';


declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [BrowserModule,
    FormsModule,
    routing,

    MdCardModule,
    MdButtonModule],
    declarations: [Root,Hello],
    providers: [],
    bootstrap: [Root]
})
export class MainModule {
}