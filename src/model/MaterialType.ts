import { Injectable } from '@angular/core';

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class MaterialType {
  public MaterialTypeName : string;
  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
