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

  public FieldType ={
    FieldTextBox : 'Textbox',
    FieldNumber : 'Number',
    FieldOption  : 'Option',
    FieldToggle : 'Toggle'
  }

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
  };
  public strCreateNewTemplateErr = {
    title: 'Invalid some Field',
    subTitle: 'Please enter some field !'
  }

  public strAddTemplateErr = {
    title: 'Add Template Failed',
    subTitle: 'Duplicate Template Name in Your Db !'
  }


  //--------------DOZONG-------------------

  public ListSegmentsDozing = [
    {SectionName : 'Begin Load'},
    {SectionName : 'Begin Carry'},
    {SectionName : 'Leave Pit'},
    {SectionName : 'ReEnter Pit'},
  ]

  public ListFieldsDozing =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Blade Type',FieldType : this.FieldType.FieldTextBox}
  ]
  //----------------HAULING---------------

  public ListSegmentsHauling =[
    {SectionName: 'Enter Load Area'},
    {SectionName: 'Begin Exchange'},
    {SectionName: 'End Load'},
    {SectionName: 'Enter Scales'},
    {SectionName: 'Leave Scales'},
    {SectionName: 'Leave Load Area'},
    {SectionName: 'Enter Dump Area'},
    {SectionName: 'Begin Dump'},
    {SectionName: 'End Dump'},
    {SectionName: 'Leave Dump Area'}
  ]

  public ListFieldsHauling =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber},
    {FieldName : 'Hauling Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Body Size', FieldType: this.FieldType.FieldNumber},
    {FieldName : 'Filtering System', FieldType : this.FieldType.FieldToggle}
  ]
  //-------------------LOADING

  public ListSegmentsLoading =[
    {SectionName: 'Begin Dump'},
    {SectionName: 'End Dump'},
    {SectionName: 'Begin Load'},
    {SectionName: 'End Load'},
  ]

  public ListFieldsLoading =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber},
    {FieldName : 'Hauling Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Body Size', FieldType: this.FieldType.FieldNumber},
    {FieldName : 'Filtering System', FieldType : this.FieldType.FieldToggle}
  ]

  //------------HAULINGFC--------------
  public ListSegmentsHaulingFC =[
    {SectionName : 'Begin Load'}
  ]

  public ListFieldsHaulingFC =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber},
    {FieldName : 'Hauling Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Body Size', FieldType: this.FieldType.FieldNumber},
    {FieldName : 'Filtering System', FieldType : this.FieldType.FieldToggle}
  ]

  //----------------Treching/Excavationg

  public ListSegmentsTrechingExcavating =[
    {SectionName: 'Begin Dump'},
    {SectionName: 'End Dump'},
    {SectionName: 'Begin Load'},
    {SectionName: 'End Load'},
  ]

  public ListFieldsTrechingExcavating =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber},
    {FieldName : 'Average Fill Factor', FieldType: this.FieldType.FieldNumber},
  ]

  ///////-----------DRILLING -----------------

  public ListSegmentsDrilling =[
    {SectionName: 'Begin Tram'},
    {SectionName: 'Begin Level'},
    {SectionName: 'Begin Position Mast'},
    {SectionName: 'Begin Collar'},
    {SectionName: 'Begin Drill'},
    {SectionName: 'Begin Retract'},
    {SectionName: 'Begin Position Mast'},
    {SectionName: 'Begin Un-Jack Machine'}
  ]

  public ListFieldsDrilling =[
    {FieldName : 'Drill Type', FieldType: this.FieldType.FieldOption},
    {FieldName : 'Machine Manufacturer',FieldType : this.FieldType.FieldOption},
    {FieldName : 'Machine Model', FieldType: this.FieldType.FieldOption},
    {FieldName : 'Position Mast/Boom', FieldType: this.FieldType.FieldToggle},
  ]

  // ------------------TEMPLATE-------------
  public ListTemplateType = [
    {TemplateName: 'Drilling',ListFields : this.ListFieldsDrilling, ListSegment: this.ListSegmentsDrilling},
    {TemplateName: 'Dozing',ListFields : this.ListFieldsDozing, ListSegment: this.ListSegmentsDozing},
    {TemplateName: 'Hauling Unit',ListFields : this.ListFieldsHauling, ListSegment: this.ListSegmentsHauling},
    {TemplateName: 'Loading Unit',ListFields : this.ListFieldsLoading, ListSegment: this.ListFieldsLoading},
    {TemplateName: 'Hauling Unit (Full Cycle)',ListFields : this.ListFieldsHaulingFC, ListSegment: this.ListSegmentsHaulingFC},
    {TemplateName: 'Trenching/Excavating',ListFields : this.ListFieldsTrechingExcavating, ListSegment: this.ListSegmentsTrechingExcavating}
  ]


  public StatusLoad  = 'Load'
  public StatusCarry = 'Carry'
  public StatusLeavePit  = 'LeavePit'
  public StatusReEnterPit  = 'ReEnterPit'


  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }
}
