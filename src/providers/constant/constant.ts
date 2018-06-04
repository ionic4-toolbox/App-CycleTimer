import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Template } from '../../model/Template';
import {Option} from "../../model/Option";

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  public TimeUnit ={
    MinutesSeconds : 'Minutes/Seconds',
    FractionalMinutes : 'Fractional Minutes'
  }

  public UnitsOfMeasure ={
    English: 'English',
    Metric : 'Metric'
  }

  public FieldType ={
    FieldTextBox : 'Textbox',
    FieldNumber : 'Number',
    FieldOption  : 'Option',
    FieldToggle : 'Toggle'
  }

  //------------------- OPTION STUDY --------------------
  public OptionDrillType = new Array<Option>(
    {OptionName : 'Option 1'},
    {OptionName : 'Option 2'},
    {OptionName : 'Option 3'},
  );


  public OptionMachineManufacturer = new Array<Option>(
    {OptionName : 'Option 1'},
    {OptionName : 'Option 2'},
    {OptionName : 'Option 3'},
  );

  public OptionMachineModel =new Array<Option>(
    {OptionName : 'Option 1'},
    {OptionName : 'Option 2'},
    {OptionName : 'Option 3'},
  );

  //--------------------------------------------

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
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'LoadingUnit'},
    {FieldName : 'Blade Type',FieldType : this.FieldType.FieldTextBox, FieldNameKey: 'BladeType'}
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
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'LoadingUnit'},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber, FieldNameKey: 'BucketSize'},
    {FieldName : 'Hauling Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'HaulingUnit'},
    {FieldName : 'Body Size', FieldType: this.FieldType.FieldNumber, FieldNameKey: 'BodySize'},
    {FieldName : 'Filtering System', FieldType : this.FieldType.FieldToggle, FieldNameKey: 'FilteringSystem'}
  ]
  //-------------------LOADING

  public ListSegmentsLoading =[
    {SectionName: 'Begin Dump'},
    {SectionName: 'End Dump'},
    {SectionName: 'Begin Load'},
    {SectionName: 'End Load'},
  ]

  public ListFieldsLoading =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'LoadingUnit'},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber, FieldNameKey: 'BucketSize'},
    {FieldName : 'Hauling Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'HaulingUnit'},
    {FieldName : 'Body Size', FieldType: this.FieldType.FieldNumber, FieldNameKey: 'BodySize'},
    {FieldName : 'Filtering System', FieldType : this.FieldType.FieldToggle, FieldNameKey: 'FilteringSystem'}
  ]

  //------------HAULINGFC--------------
  public ListSegmentsHaulingFC =[
    {SectionName : 'Begin Load'}
  ]

  public ListFieldsHaulingFC =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'LoadingUnit'},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber, FieldNameKey: 'BucketSize'},
    {FieldName : 'Hauling Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'HaulingUnit'},
    {FieldName : 'Body Size', FieldType: this.FieldType.FieldNumber, FieldNameKey: 'BodySize'},
    {FieldName : 'Filtering System', FieldType : this.FieldType.FieldToggle, FieldNameKey: 'FilteringSystem'}
  ]

  //----------------Treching/Excavationg

  public ListSegmentsTrechingExcavating =[
    {SectionName: 'Begin Dump'},
    {SectionName: 'End Dump'},
    {SectionName: 'Begin Load'},
    {SectionName: 'End Load'},
  ]

  public ListFieldsTrechingExcavating =[
    {FieldName : 'Loading Unit', FieldType: this.FieldType.FieldTextBox, FieldNameKey: 'LoadingUnit'},
    {FieldName : 'Bucket Size',FieldType : this.FieldType.FieldNumber, FieldNameKey: 'BucketSize'},
    {FieldName : 'Average Fill Factor', FieldType: this.FieldType.FieldNumber, FieldNameKey: 'AverageFillFactor'},
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
    {FieldName : 'Drill Type', FieldType: this.FieldType.FieldOption, FieldNameKey: 'DrillType', ListOption: this.OptionDrillType},
    {FieldName : 'Machine Manufacturer',FieldType : this.FieldType.FieldOption, FieldNameKey: 'MachineManufacturer', ListOption: this.OptionMachineManufacturer},
    {FieldName : 'Machine Model', FieldType: this.FieldType.FieldOption, FieldNameKey: 'MachineModel',ListOption: this.OptionMachineModel},
    {FieldName : 'Position Mast/Boom', FieldType: this.FieldType.FieldToggle, FieldNameKey: 'PositionMastBoom'},
  ]

  // ------------------TEMPLATE-------------
  public ListTemplateType = [
    {TemplateName: 'Drilling',ListFields : this.ListFieldsDrilling, ListSegment: this.ListSegmentsDrilling},
    {TemplateName: 'Dozing',ListFields : this.ListFieldsDozing, ListSegment: this.ListSegmentsDozing},
    {TemplateName: 'Hauling Unit',ListFields : this.ListFieldsHauling, ListSegment: this.ListSegmentsHauling},
    {TemplateName: 'Loading Unit',ListFields : this.ListFieldsLoading, ListSegment: this.ListSegmentsLoading},
    {TemplateName: 'Hauling Unit (Full Cycle)',ListFields : this.ListFieldsHaulingFC, ListSegment: this.ListSegmentsHaulingFC},
    {TemplateName: 'Trenching/Excavating',ListFields : this.ListFieldsTrechingExcavating, ListSegment: this.ListSegmentsTrechingExcavating}
  ]


  public StatusLoad  = 'Load'
  public StatusCarry = 'Carry'
  public StatusLeavePit  = 'LeavePit'
  public StatusReEnterPit  = 'ReEnterPit'

  //---------------------SUMMARY-------------------------
  public listBackgroundColors: any = [
    { color: '#f04336'  },
    { color: '#fac135'  },
    { color: '#fbf132'  },
    { color: '#92ca58'  },
    { color: '#4fb152'  },
    { color: '#38b0f1'  },
    { color: '#0e6fc0'  },
    { color: '#01205f'  },
    { color: '#7645a1'  },
    { color: '#d9d9d9'  },
    { color: '#585858'  },
    { color: '#aeaaaa'  },
    { color: '#abb8ca'  },
    { color: '#f8cbac'  },
    { color: '#dbdbdb'  },
    { color: '#fee699'  },
    { color: '#b4c6e7'  },
    { color: '#c6e1b4'  },
    { color: '#bf3429'  },
  ];



  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }
}
