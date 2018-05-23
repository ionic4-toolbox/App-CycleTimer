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

  public checkActiveLoad : boolean = true;
  public checkActiveCarry : boolean = false;
  public checkActiveLeavePit : boolean = false;
  public checkActiveReEnterPit : boolean = false;

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

  getTimerLoad(ev){
    console.log('Time in second Load: ', ev)
  }
  getTimerCarry(ev){
    console.log('Timer in second Carry: ', ev)
  }
  getTimerLeavePit(ev){
    console.log('Timer in second Leave pit: ', ev)
  }
  getTimerReEnterPit(ev){
    console.log('Timer in second ReEnter pit: ',ev)
  }

}
