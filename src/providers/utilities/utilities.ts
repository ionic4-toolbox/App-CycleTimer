import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ConstantProvider } from '../constant/constant';
import {EmailComposer} from "@ionic-native/email-composer";

/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilitiesProvider {

  constructor(public http: Http, private alertCtrl : AlertController, private constant: ConstantProvider, private emailComposer: EmailComposer) {
    console.log('Hello UtilitiesProvider Provider');
  }

  alertNotificationErr(str1, str2){
    let alert = this.alertCtrl.create({
      title: str1,
      subTitle: str2,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  getStudyDate(){
   return this.constant.StudyDate;
  }

  insertItemToPosition(arr, index, item){
    arr.splice(index,0,item);
  }

  sendEmail(email){
    this.emailComposer.open(email);
  }




}
