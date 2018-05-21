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

  //*********************** TABLE MATERIAL *********************************

  setMaterial(data){
    localStorage.setItem('material',data);
  }

  getMaterial(){
    if(localStorage.getItem('material') == null){
      this.setMaterial(JSON.stringify(this.constant.ListMaterial))
      return this.constant.ListMaterial;
    }

    return JSON.parse(localStorage.getItem('material'));
  }

  //********************************* Table STUDY ***********************************

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

  saveStudy(entity){
    localStorage.setItem('study',entity);
  }

  getListStudy(){
    return JSON.parse(localStorage.getItem('study'));
  }

  addItemToStudies(item){

    //check if item name exist
    let itemName = item.StudyName;
    //

    let listStudy = this.getListStudy();

    if (listStudy == null){
      listStudy = [];
    }

    for (let i=0; i< listStudy.length; i++){
      if (listStudy[i].StudyName == itemName){
        return false;
      }
    }
    listStudy.push(item);
    this.saveStudy(JSON.stringify(listStudy));

    return true;
  }

  deleteItemFromStudies(studyName){
    let listStudy = this.getListStudy();

    for (let i=0; i< listStudy.length; i++){
      if (listStudy[i].StudyName == studyName){
        listStudy.splice(i,1);
        break;
      }
    }
    this.saveStudy(JSON.stringify(listStudy));
  }

}
