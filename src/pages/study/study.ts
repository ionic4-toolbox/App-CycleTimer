import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';

/**
 * Generated class for the StudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {
  public studyName : string;
  public listSegments = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private constant: ConstantProvider ) {
    this.studyName = this.navParams.data;
    console.log(this.studyName)
    this.init();
  }

  init(){
    this.listSegments = this.constant.ListSegments;
    console.log(this.listSegments)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

}
