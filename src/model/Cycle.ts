import { Section } from './Section';
import { Injectable } from '@angular/core';

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Cycle {
  public ListSegments : Array<Section>;
  
  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
