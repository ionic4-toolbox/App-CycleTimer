import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  item:any;
  form:any = {};
  public studyDate:Study;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
    this.item = this.navParams.data;
    this.studyDate = this.database.getStudyDate().slice(0,10);
    console.log(this.studyDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaseTemplatePage');
  }

}
