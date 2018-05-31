import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, DateTime, Item } from 'ionic-angular';
import { Study } from '../../model/Study';
import { DatabaseProvider } from '../../providers/database/database';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { ConstantProvider } from '../../providers/constant/constant';
import { StudyPage } from '../study/study';
import { StudyTypePage } from '../study-type/study-type';
import {Template} from "../../model/Template";

/**
 * Generated class for the BaseTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-base-template',
  templateUrl: 'base-template.html',
})
export class BaseTemplatePage {

  public checked = false;
  public item:any;
  public form:any = {
    template: {},
    text: {},
    number: {},
    option: {},
    toggle: {}
  };

  public studyDate: any;
  public materialType = [];
  public listSegments = [];

  public entityStudy : Study;

  public listTemplate : Template;

  public fieldsType: any;
  public ListFields:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, private alertCtrl: AlertController, private utilities: UtilitiesProvider, private constant: ConstantProvider)
  {
    this.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaseTemplatePage');
  }

  init(){
    this.fieldsType = this.constant.FieldType;

    console.log('fieldsType',this.fieldsType);
    this.item = this.navParams.data;

    this.ListFields = this.item.ListFields;
    console.log('ListFields', this.ListFields)

    console.log('item: ', this.item)
    this.listTemplate = this.database.getListTemplate();
    console.log('list Template: ', this.listTemplate)


    this.studyDate = this.utilities.getStudyDate().slice(0,10);
    console.log(this.studyDate);

    this.materialType = this.database.getMaterial();
    this.getListSegment();
    console.log(this.listSegments);

  }

  getListSegment(){
    console.log(this.constant.TemplatesObject.TemplateDrilling);

    this.listSegments = this.database.getListSegmentByTemplateName(this.item.TemplateName);
    console.log('List Segment: ', this.listSegments)
  }



  beginStudy(form, item, listFieldKey){
    console.log('listFieldKey: ', listFieldKey)
    this.entityStudy = form.value;
    this.entityStudy.TemplateName = item;

    let keys = [];

    for(let i = 0; i < listFieldKey.length; i++){
      keys.push(listFieldKey[i].FieldNameKey);

      listFieldKey[i].FieldValue = this.entityStudy[keys[i]];
    }


    if ( !form.valid || this.entityStudy.StudyName == ''){

      this.utilities.alertNotificationErr(this.constant.strBeginStudyErr.title, this.constant.strBeginStudyErr.subTitle)

    } else {
      let checkAddItem = this.database.addItemToStudies(this.entityStudy, listFieldKey);
      if(!checkAddItem){
        // do something
        this.utilities.alertNotificationErr(this.constant.strAddItemErr.title, this.constant.strAddItemErr.subTitle)
        return;
      }
      // do something push page
      this.navCtrl.push(StudyPage, this.entityStudy.StudyName)
    }

  }

}
