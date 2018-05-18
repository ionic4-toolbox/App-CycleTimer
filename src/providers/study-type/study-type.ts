import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudyTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudyTypeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudyTypeProvider Provider');
  }

}
