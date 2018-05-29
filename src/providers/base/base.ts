import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {DatabaseProvider} from "../database/database";

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseProvider {

  constructor(public http: Http, private db: DatabaseProvider) {
    console.log('Hello BaseProvider Provider');
  }

  saveNewTemplate(formEntity, textBoxArr, sectionArr){
    return this.db.saveNewTemplate(formEntity, textBoxArr, sectionArr);
  }
}
