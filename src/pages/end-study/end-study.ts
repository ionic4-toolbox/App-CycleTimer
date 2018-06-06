import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { ConstantProvider } from '../../providers/constant/constant';
import { StudySpilitsModalPage } from './../study-spilits-modal/study-spilits-modal';
import { Template } from './../../model/Template';
import { DatabaseProvider } from './../../providers/database/database';
/**
 * Generated class for the EndStudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-end-study',
  templateUrl: 'end-study.html',
})
export class EndStudyPage {

  public summary: any = [];

  public listBackgroundColors: any = [];
  public totalTime: number = 0;
  public totalTimeStr: string;
  public listStudyByName: any;
  public studyName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public utilities: UtilitiesProvider
    , public modalCtrl: ModalController, public constant: ConstantProvider, public database: DatabaseProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndStudyPage');
    this.init();
  }

  init(){
    this.studyName = this.navParams.data;
    this.listStudyByName = this.database.getStudyByStudyName(this.studyName)

    this.summary = this.listStudyByName.Template.ListSegment;
    console.log(this.summary);
    this.listBackgroundColors = this.constant.listBackgroundColors;

    for(let i = 0; i < this.summary.length; i++){
      this.totalTime += this.getSecondsToClock(this.summary[i].DisplayTime);
    }

    this.totalTimeStr = this.timeFormat(this.totalTime);

    for(let i = 0; i < this.summary.length ; i++){
      this.summary[i].color = this.listBackgroundColors[i].color;
      this.summary[i].ratio = (this.getSecondsToClock(this.summary[i].DisplayTime)/(this.totalTime))*100;
      this.summary[i].time = this.timeFormat(this.getSecondsToClock(this.summary[i].DisplayTime));
    }
    console.log('Summary: ', this.summary);
  }

  timeFormat(totalSeconds: number){

    let minutes = Math.floor(totalSeconds/60);
    let seconds = Math.round((totalSeconds/60 - minutes)*60);

    let minutesString = '';
    let secondsString = '';

    minutesString = minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();

    return minutesString + ':' + secondsString
  }

  getSecondsToClock(time: string){
    let hours = parseInt(time.slice(0,2));
    let minutes = parseInt(time.slice(3,5));
    let seconds = parseInt(time.slice(6,8));
    

    let totolSeconds = 0;
    totolSeconds =  hours*3600 + minutes*60 + seconds;

    console.log('totolSeconds: ', totolSeconds);
    return totolSeconds;
  }

  openModalSpilist(){
    let myModal = this.modalCtrl.create('StudySpilitsModalPage', { 'studyName': this.studyName });
    myModal.present();
  }

  backHome(){
    this.navCtrl.push(HomePage)
  }


  saveEndStudy(){
    this.navCtrl.push(HomePage)
  }

}
