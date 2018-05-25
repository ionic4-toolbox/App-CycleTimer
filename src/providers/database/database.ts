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
    localStorage.setItem('template',data);
  }

  getListTemplate(){
    if(localStorage.getItem('template') == null){
        this.setTemplate(JSON.stringify(this.constant.ListTemplateType))
        return this.constant.ListTemplateType;
    }

    return JSON.parse(localStorage.getItem('template'));
  }

  addNewTemplate(entity){
    let itemName = entity.TemplateName;
    //

    let listTemplate = this.getListTemplate();

    if (listTemplate == null){
      listTemplate = [];
    }

    for (let i=0; i< listTemplate.length; i++){
      if (listTemplate[i].TemplateName == itemName){
        return false;
      }
    }

    listTemplate.push(entity);
    this.setTemplate(JSON.stringify(listTemplate));

    return true;
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

  getStudyByTemplateName(templateName){
    let listStudy = this.getListStudy();
    let arrStudyInTemplate = [];

    if(templateName == 'All'){
      
      let listStudy = this.getListStudy();
      return listStudy;
    }

    for (let i=0; i< listStudy.length; i++){
      if (listStudy[i].TemplateName == templateName){
        arrStudyInTemplate.push(listStudy[i]);
      }
    }

    return arrStudyInTemplate;
  }

}
