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

  public ListMaterial = [
    {MaterialName : 'Stone'},
    {MaterialName : 'Soil'},
    {MaterialName : 'Brick'}
  ]

  public StudyDate = new Date().toISOString();

  public strBeginStudyErr  = {
      title: 'Invalid some Field',
      subTitle: 'Please enter full field !'
  };
  public strAddItemErr = {
      title: 'Add Item Failed',
      subTitle: 'Duplicate Item Name in Your Db !'
  }

  public ListSegments = [
    {name: 'Begin Load'},
    {name: 'Begin Carry'},
    {name: 'Leave Pit'},
    {name: 'ReEnter Pit'},

  ]


  public StatusLoad  = 'Load'
  public StatusCarry = 'Carry'
  public StatusLeavePit  = 'LeavePit'
  public StatusReEnterPit  = 'ReEnterPit'


  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }
}
