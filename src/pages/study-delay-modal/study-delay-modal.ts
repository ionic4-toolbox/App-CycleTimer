import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StudyDelayModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-delay-modal',
  templateUrl: 'study-delay-modal.html',
})
export class StudyDelayModalPage {

  public formRef: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyDelayModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss({Note:''});
  }

  closeModal(formRef){
    this.viewCtrl.dismiss(formRef.value);
    console.log('formRef.value: ',formRef.value);
  }


}
