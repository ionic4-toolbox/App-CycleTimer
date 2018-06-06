import { Injectable } from '@angular/core';
import { Material } from './Material'
import { Template } from './Template'
import { Field } from "./Field";
import { Cycle } from "./Cycle";

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Study {
  public StudyName : string;
  public StudyDescription : string;
  public PreparedFor : string;
  public PreparedBy : string;
  public StudyDate : Date;
  public Material : Material;
  public LoadingUnit : string;
  public Blast : string;
  public BladeType : string;
  public ListCycle :  Array<Cycle>;

  public Template : Template;
  public TemplateName: string;
  public ListFields : Array<Field>;

  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
