import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ConstantProvider } from '../constant/constant';
import {Template} from "../../model/Template";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  public template : Template;

  constructor(public http: Http, private constant : ConstantProvider) {
    console.log('Hello DatabaseProvider Provider');
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

  //------------- New Template -------------------
  saveNewTemplate(formEntity, textBoxArr, sectionArr){
    let temp1 = new Template();
    temp1= formEntity;

    let new_template= {
      TemplateName: temp1.TemplateName,
      ListFields : textBoxArr,
      ListSegment : sectionArr
    }

    this.template = new_template;
    console.log('Template: ', this.template)

    let listTemplate = this.getListTemplate();

    for (let i=0; i< listTemplate.length; i++){
      if (listTemplate[i].TemplateName == temp1.TemplateName){

        console.log('FAILLLLLLLLLLLLL')
        return false;
      }
    }

    console.log('CODE CONTINUTES')
    listTemplate.push(this.template);
    console.log('List Template: ', listTemplate)
    console.log('BBBBBBBBBBBBb')
    this.setTemplate(JSON.stringify(listTemplate));
    console.log('CCCCCCCCCCCcc')
    return true;
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

  getListSegmentByTemplateName(templateName){
    let listTemplate = this.getListTemplate();

    for (let i=0; i< listTemplate.length; i++){
      if (listTemplate[i].TemplateName == templateName){
        return listTemplate[i].ListSegment;
      }
    }

    return null;
  }



}
