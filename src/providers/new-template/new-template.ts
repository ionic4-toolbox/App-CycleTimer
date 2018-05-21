import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {DatabaseProvider} from "../database/database";

/*
  Generated class for the NewTemplateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewTemplateProvider {

  constructor(public http: Http, private database: DatabaseProvider) {
    console.log('Hello NewTemplateProvider Provider');
  }

  addNewTemplate(entity){
    return this.database.addNewTemplate(entity);
  }

  getTemplateByName(templateName){

  }
  getAllTemplate(){
    return this.database.getListTemplate();
  }

  saveTemplate(entity){
    this.database.setTemplate(entity);
  }

}
