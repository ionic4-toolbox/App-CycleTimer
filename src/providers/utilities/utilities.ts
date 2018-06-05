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

  create_unique_slug(database_slug_field, title) {
    let database_filter = {};
    database_filter[database_slug_field] = title;

    return database_filter;
  }



  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();

    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  convertStringTimerToSeconds(displayTimer){
    let arrUnit = [];
    arrUnit = displayTimer.split(':');

    let seconds = parseInt(arrUnit[0])*60*60  + parseInt(arrUnit[1])*60 + parseInt(arrUnit[2]);

    return seconds;
  }

}
