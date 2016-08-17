import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { Irdata}               from './irdata';
import { IrdataService }       from './irdata.service';

@Component({
    selector: 'irdata-list',
    providers: [HTTP_PROVIDERS,IrdataService,Irdata], 
    template: `
        <md-card *ngFor="let data of showList();">
            {{data.name}}
            {{data.detail}}
            {{data.data}}<br />
        </md-card>
        <!--
        New hero name:
        <input #newHeroName />
        <button (click)="showList();">
            Add Hero
        </button>
        -->
        <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `
})

export class IrdataListComponent implements OnInit {

    constructor (private heroService: IrdataService) {}

    errorMessage: string;
    irdatas: Irdata[];

    ngOnInit() { 
        this.getHeroes();
    }

    showList(){
        if(this.irdatas == null){
            return null;
        }
        var dataList: Irdata[] = new Array();
        var list = this.irdatas;
        Object.keys(list).forEach(function(item){
            dataList.push(list[item]);
        });
        return dataList;
    }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(
                datas => this.irdatas = datas,
                error =>  this.errorMessage = <any>error
            );
    }

}
