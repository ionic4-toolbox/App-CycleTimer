import { Component } from '@angular/core';
import { Template } from './../../model/Template';
import { DatabaseProvider } from './../../providers/database/database';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StudySpilitsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-spilits-modal',
  templateUrl: 'study-spilits-modal.html',
})
export class StudySpilitsModalPage {


  public listSegments: any;
  public listStudyByName: any;
  public studyName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public database: DatabaseProvider) {
    this.init();
  }

  init(){
    this.studyName = this.navParams.get('studyName');
    console.log('studyName:', this.studyName)

    this.listStudyByName = this.database.getStudyByStudyName(this.studyName);
    this.listSegments = this.listStudyByName.Template.ListSegment;

    console.log(this.listSegments);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudySpilitsModalPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
