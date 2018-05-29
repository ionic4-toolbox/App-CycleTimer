import { Injectable } from '@angular/core';
import {Section} from "./Section";
import {List, Segment} from "ionic-angular";
import {Field} from "./Field";

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Template {
  public TemplateName : string;
  // public TimeUnits : string;
  // public UnitsOfMeasure : string;

  public ListFields: Array<Field>;
  public ListSegment : Array<Section>;

  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
