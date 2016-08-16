/// <reference path="../typings/index.d.ts"/>
import { NgModule }       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import 'zone.js/dist/zone';

import './index.styl';
import {enableProdMode,ApplicationRef} from '@angular/core';
import {Root,routing} from './routes';


declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [BrowserModule,FormsModule,routing],
    declarations: [Root],
    providers: [],
    bootstrap: [Root]
})
export class MainModule {
}