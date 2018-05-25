import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewTemplatePage } from '../new-template/new-template';
import { DatabaseProvider } from '../../providers/database/database';
import { Template } from '../../model/Template';
import { BaseTemplatePage } from '../base-template/base-template';

/**
 * Generated class for the StudyTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-type',
  templateUrl: 'study-type.html',
})
export class StudyTypePage {

  public listStudyType : Template;

  constructor(public navCtrl: NavController, public navParams: NavParams , public database: DatabaseProvider) {
    this.listStudyType = this.database.getListTemplate();
    console.log(this.listStudyType)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyTypePage');
  }

  onclickNewTemplate(){
    this.navCtrl.push(NewTemplatePage)
  }

  itemTapped(event, item) {
    this.navCtrl.push(BaseTemplatePage, item);
  }

}
