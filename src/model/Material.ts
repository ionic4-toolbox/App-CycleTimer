import { Injectable } from '@angular/core';
import { MaterialType } from './MaterialType'

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Material {
  public MaterialType : MaterialType;
  public MaterialName : string;
  public MaterialDensityLbsBcy: number;
  public MaterialDensityLbsLcy : number;

  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
