import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.init();
  }

  init(){
    this.listSegments = this.navParams.data;
    console.log(this.listSegments);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudySpilitsModalPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
