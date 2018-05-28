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
    {TemplateName: 'Drilling'},
    {TemplateName: 'Dozing'},
    {TemplateName: 'Hauling Unit'},
    {TemplateName: 'Loading Unit'},
    {TemplateName: 'Hauling Unit (Full Cycle)'},
    {TemplateName: 'Trenching/Excavating'}
  ]

  public TemplatesObject={
     TemplateDrilling : 'Drilling',
     TemplateDozing : 'Dozing',
     TemplateHaulingUnit : 'Hauling Unit',
     TemplateLoadingUnit : 'Loading Unit',
     TemplateHaulingUnitFullCycle : 'Hauling Unit (Full Cycle)',
     TemplateTrenching : 'Trenching/Excavating'
  }

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

  public ListSegmentsDozing = [
    {name: 'Begin Load'},
    {name: 'Begin Carry'},
    {name: 'Leave Pit'},
    {name: 'ReEnter Pit'},

  ]
  public ListSegmentsHauling =[
    {name: 'Enter Load Area'},
    {name: 'Begin Exchange'},
    {name: 'End Load'},
    {name: 'Enter Scales'},
    {name: 'Leave Scales'},
    {name: 'Leave Load Area'},
    {name: 'Enter Dump Area'},
    {name: 'Begin Dump'},
    {name: 'End Dump'},
    {name: 'Leave Dump Area'}
  ]

  public ListSegmentsLoading =[
    {name: 'Begin Dump'},
    {name: 'End Dump'},
    {name: 'Begin Load'},
    {name: 'End Load'},
  ]

  public ListSegmentsHaulingFC =[
    {name : 'Begin Load'}
  ]

  public ListSegmentsTrechingExcavating =[
    {name: 'Begin Dump'},
    {name: 'End Dump'},
    {name: 'Begin Load'},
    {name: 'End Load'},
  ]

  public ListSegmentsDrilling =[
    {name: 'Begin Tram'},
    {name: 'Begin Level'},
    {name: 'Begin Position Mast'},
    {name: 'Begin Collar'},
    {name: 'Begin Drill'},
    {name: 'Begin Retract'},
    {name: 'Begin Position Mast'},
    {name: 'Begin Un-Jack Machine'}
  ]


  public StatusLoad  = 'Load'
  public StatusCarry = 'Carry'
  public StatusLeavePit  = 'LeavePit'
  public StatusReEnterPit  = 'ReEnterPit'


  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }
}
