import { Injectable } from '@angular/core';

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Section {
  public SectionName : string;
  public DisplayTime : string;
  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
