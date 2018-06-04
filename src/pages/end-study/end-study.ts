import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { ConstantProvider } from '../../providers/constant/constant';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public utilities: UtilitiesProvider
    , public modalCtrl: ModalController, public constant: ConstantProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndStudyPage');
    this.init();
  }

  init(){
    this.summary = this.navParams.data;
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

    return minutes + ':' + seconds
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

  }

  // openModal(pageName, listSegments) {
  //     // this.modalCtrl.create(pageName, listSegments)
  //     let myModal = this.modalCtrl.create(pageName, listSegments);
  //     myModal.present();
  //   }

  saveEndStudy(){
    this.navCtrl.push(HomePage)
  }

}
