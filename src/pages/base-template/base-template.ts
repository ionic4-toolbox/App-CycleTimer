import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, DateTime, Item } from 'ionic-angular';
import { Study } from '../../model/Study';
import { DatabaseProvider } from '../../providers/database/database';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { ConstantProvider } from '../../providers/constant/constant';
import { StudyPage } from '../study/study';
import { StudyTypePage } from '../study-type/study-type';

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

  public item:any;
  public form:any = {};
  public studyDate: any;
  public materialType = [];
  public listSegments = [];

  public entityStudy : Study;

  public checkCurrentTemplate : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, private alertCtrl: AlertController, private utilities: UtilitiesProvider, private constant: ConstantProvider)
  {
    this.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaseTemplatePage');
  }

  init(){
    this.item = this.navParams.data;
    switch (this.item){
      case this.constant
    }

    this.studyDate = this.utilities.getStudyDate().slice(0,10);
    console.log(this.studyDate);

    this.materialType = this.database.getMaterial();
    this.listSegments = this.constant.ListSegments;
  }

  beginStudy(form, item){
    this.entityStudy = form.value;
    this.entityStudy.TemplateName = item;
    console.log('test :', this.entityStudy)

    if ( !form.valid || this.entityStudy.StudyName == ''){

      this.utilities.alertNotificationErr(this.constant.strBeginStudyErr.title, this.constant.strBeginStudyErr.subTitle)

    } else {
      let checkAddItem = this.database.addItemToStudies(this.entityStudy);
      if(!checkAddItem){
        // do something
        this.utilities.alertNotificationErr(this.constant.strAddItemErr.title, this.constant.strAddItemErr.subTitle)
        return;
      }

      console.log('OKKKKKKKK')
      // do something push page
      this.navCtrl.push(StudyPage, this.entityStudy.StudyName)
    }

    //this.navCtrl.push(StudyPage, this.entityStudy.StudyName)
  }


}
