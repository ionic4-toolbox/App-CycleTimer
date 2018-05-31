import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UtilitiesProvider} from "../../providers/utilities/utilities";
import {ConstantProvider} from "../../providers/constant/constant";
import {BaseProvider} from "../../providers/base/base";
import {StudyTypePage} from "../study-type/study-type";

/**
 * Generated class for the NewTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-template',
  templateUrl: 'new-template.html',
})
export class NewTemplatePage {

  public form:any = {
    FieldTypeDefault: '',
  }
  public sectionArray:any = [];
  public fieldTextboxArray:any = [];
  public fieldNumberArray:any = [];

  public checkAddTemplate: boolean;

  public listFieldType: any;
  public FieldTypeDefault: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private utilities: UtilitiesProvider, private constant: ConstantProvider, private base: BaseProvider) {
    this.init();
  }

  init(){
    this.listFieldType = this.constant.FieldType;
    this.form.FieldTypeDefault = this.listFieldType.FieldTextBox;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTemplatePage');
  }


  addFieldTextbox(){
    this.fieldTextboxArray.push({FieldName: ''});
  }

  addFieldNumber(){
    this.fieldNumberArray.push({number: ''});
  }

  addSection(){
    this.sectionArray.push({SectionName: ''});
  }

  cancelNewTemplate(){
    this.navCtrl.pop();
  }

  saveNewTemplate(form){

    let entity = form.value;
    console.log('Entity: ', entity)
    if (entity.TemplateName == '' || entity.TemplateName == null){
      this.utilities.alertNotificationErr(this.constant.strCreateNewTemplateErr.title, this.constant.strCreateNewTemplateErr.subTitle)
    }
    else {
      console.log('form : ',form.value);
      let listField = [];
      let listSection =[];
      for (let i=0; i< this.fieldTextboxArray.length; i++){

        if (this.fieldTextboxArray[i].FieldName !=''){
          // this.fieldTextboxArray[i].FieldType = this.constant.FieldType.FieldTextBox;
          this.fieldTextboxArray[i].FieldNameKey = this.fieldTextboxArray[i].FieldName.replace(/\s+/g, '');

          listField.push(this.fieldTextboxArray[i]);
        }
      }
      for (let i=0;i< this.sectionArray.length; i++){
        if (this.sectionArray[i].SectionName != ''){
          listSection.push(this.sectionArray[i]);
        }
      }

      this.checkAddTemplate = this.base.saveNewTemplate(entity,listField,listSection);
      console.log('CHECK ADD ITEM: ', this.checkAddTemplate)

      if (!this.checkAddTemplate){
        this.utilities.alertNotificationErr(this.constant.strAddTemplateErr.title, this.constant.strAddTemplateErr.subTitle)
      } else {
        this.navCtrl.push(StudyTypePage);
      }
    }



  }
}
