import { Injectable } from '@angular/core';
import {Section} from "./Section";
import {List} from "ionic-angular";

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Template {
  public TemplateName : string;
  public TimeUnits : string;
  public UnitsOfMeasure : string;
  //public ListSections : List<Section>

  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
