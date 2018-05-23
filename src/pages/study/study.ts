import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.studyName = this.navParams.data;
    console.log(this.studyName)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

  stopStudy(){
    let a= document.getElementById('timerBeginLoad');
    console.log('a: ', a)
  }

}
