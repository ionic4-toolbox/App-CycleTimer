import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConstantProvider} from "../../providers/constant/constant";

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



  public checkStatus : string;
  public started : boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, private constant : ConstantProvider) {
    this.studyName = this.navParams.data;
    console.log(this.studyName);

    this.init();
  }

  init(){
    this.checkStatus =this.constant.StatusLoad;
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

  setChangeStatus(ev){
    // if (this.checkStatus != ev){
    //
    // }
    this.checkStatus = ev;
    console.log('Change Status: ', this.checkStatus);
  }

}
