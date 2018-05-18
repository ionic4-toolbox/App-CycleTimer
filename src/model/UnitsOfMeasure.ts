import { Injectable } from '@angular/core';

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class UnitsOfMeasure {
  public Language : string;
  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
