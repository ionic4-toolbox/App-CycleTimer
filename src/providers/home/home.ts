import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {DatabaseProvider} from "../database/database";

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http, private db : DatabaseProvider) {
    console.log('Hello HomeProvider Provider');
  }

  getListStudy(){
    return (this.db.getListStudy() == null) ? [] : this.db.getListStudy();
  }
}
