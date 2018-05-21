import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Template } from '../../model/Template';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  public ListTemplateType = [
    {TemplateName: 'Dozing'},
    {TemplateName: 'Hauling Unit'},
    {TemplateName: 'Loading Unit'},
    {TemplateName: 'Hauling Unit (Full Cycle)'},
    {TemplateName: 'Trenching/Excavating'},
    {TemplateName: 'Drills'},
  ]

  public StudyDate = new Date().toISOString();


  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }
}
