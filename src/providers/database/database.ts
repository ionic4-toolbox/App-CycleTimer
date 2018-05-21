import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ConstantProvider } from '../constant/constant';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {


  constructor(public http: Http, private constant : ConstantProvider) {
    console.log('Hello DatabaseProvider Provider');
  }

  // set data template
  setTemplate(data){
    localStorage.setItem('list_template',data);
  }

  getListTemplate(){
    if(localStorage.getItem('list_template') == null){
        this.setTemplate(JSON.stringify(this.constant.ListTemplateType))
        return this.constant.ListTemplateType;
    }

    return JSON.parse(localStorage.getItem('list_template'));
  }

  // set data study date
  setStudyDate(data){
    localStorage.setItem('study_date', data);
  }

  getStudyDate(){
    if(localStorage.getItem('study_date') == null){
      this.setStudyDate(JSON.stringify(this.constant.StudyDate))
      return this.constant.StudyDate;
    }

    return JSON.parse(localStorage.getItem('study_date'))
  }

}
