import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudyTypePage } from '../study-type/study-type';
import { DatabaseProvider } from '../../providers/database/database';
import {Study} from "../../model/Study";
import {HomeProvider} from "../../providers/home/home";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public listStudy : Study

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeProvider: HomeProvider) {
      this.initHome();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  initHome(){
    this.listStudy = this.homeProvider.getListStudy();
  }
  onclickStudyType(){
    this.navCtrl.push(StudyTypePage)
  }
}
