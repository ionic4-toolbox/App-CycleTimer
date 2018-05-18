import { Injectable } from '@angular/core';
import { Material } from './Material'
import { Template } from './Template'

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

  public Template : Template;

  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
