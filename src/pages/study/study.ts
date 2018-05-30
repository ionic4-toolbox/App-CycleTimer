import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConstantProvider} from "../../providers/constant/constant";
import { StudyTypePage } from '../study-type/study-type';

/**
 * Generated class for the StudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}
let totalPause =0;
let timePause =0;
let processCountTimerPause;

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

  public timeInSeconds: any;
  public timePause: number;
  public checkStatus : string;
  public started : boolean;
  timer: CountdownTimer

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

  ngOnInit() {
    this.initTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    totalPause =0;
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    console.log('display time: ', this.timer.displayTime)
  }


  recordTime(){
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
    console.log('Record Time');
  }

  backStudy(){
    // do something
    this.navCtrl.push(StudyTypePage)
  }

  pauseStudy(){
    this.timer.runTimer = false;

    clearInterval(processCountTimerPause);
    this.intervalPause();

    console.log('Pause Study');
  }

  stopStudy(){
    // do something
    console.log('Stop Study');
  }

  delayStudy(){

    console.log('Delay Study');
  }


  // resumeTimer() {

  //   totalPause += timePause;
  //   console.log('time pause: ', timePause)
  //   console.log('total pause: ', totalPause);
  //   this.startTimer();
  // }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining++;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining >= 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
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

  intervalPause(){
    timePause =0;
    processCountTimerPause = setInterval(()=>{
      timePause += 1;

    },1000)
    console.log('Time Pause: ', processCountTimerPause)
  }

}
