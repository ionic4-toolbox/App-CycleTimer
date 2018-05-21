import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Study } from '../../model/Study';
import { DatabaseProvider } from '../../providers/database/database';

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
  public studyDate:Study;
  public materialType = [];

  public entityStudy : Study;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, private alertCtrl: AlertController) {
    this.item = this.navParams.data;
    this.studyDate = this.database.getStudyDate().slice(0,10);
    console.log(this.studyDate);

    this.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaseTemplatePage');
  }

  init(){
    this.materialType = this.database.getMaterial();
  }

  beginStudy(entity){
    this.entityStudy = entity;

    if (entity.valid || this.entityStudy.StudyName){
      let alert = this.alertCtrl.create({
        title: 'Invalid some Field',
        subTitle: 'Please enter full field !',
        buttons: ['Dismiss']
      });
      alert.present();
    } else {
      this.database.addItemToStudies(this.entityStudy);
      console.log('OKKKKKKKK')
    }
  }

}
