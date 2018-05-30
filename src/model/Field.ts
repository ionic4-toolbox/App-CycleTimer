import { Injectable } from '@angular/core';

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Field {
  public FieldName : string;
  public FieldType : string;
  public FieldValue: string;
  public FieldNameKey : string;
  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
