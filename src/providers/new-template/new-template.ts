import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewTemplateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewTemplateProvider {

  constructor(public http: Http) {
    console.log('Hello NewTemplateProvider Provider');
  }

}
