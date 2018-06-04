import { StudyDelayModalPage } from './../study-delay-modal/study-delay-modal';
import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {ConstantProvider} from "../../providers/constant/constant";
import { StudyTypePage } from '../study-type/study-type';
import {Section} from "../../model/Section";
import {StudyProvider} from "../../providers/study/study";
import { StudySpilitsModalPage } from '../study-spilits-modal/study-spilits-modal';
import { EndStudyPage } from '../end-study/end-study';

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
let processTimerTick;

@IonicPage()
@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {
  public studyName : string;
  public listSegments : Array<Section>;
  public currentSegment : number;

  public timeInSeconds: any;
  public timePause: number;
  public checkStatus : string;
  public started : boolean;
  timer: CountdownTimer;

  public dataNote: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private constant : ConstantProvider,
    private studyProvider: StudyProvider, public modalCtrl: ModalController) {
    this.studyName = this.navParams.data;
    console.log(this.studyName);

    this.init();
  }

  init(){
    this.checkStatus =this.constant.StatusLoad;

    this.listSegments = this.studyProvider.getListSegmentByStudyName(this.studyName);
    this.currentSegment = this.listSegments.length-1;

    for (let i=0; i<this.listSegments.length;i++){
      this.listSegments[i].DisplayTime = this.getSecondsAsDigitalClock(0);
    }
    console.log('LIST SEGMENT: ', this.listSegments)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

  ngOnInit() {
    this.initTimer();
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  openModalSpilist(){
    this.openModal('StudySpilitsModalPage', this.listSegments)
  };

  openModalDelay(){
    this.openModal('StudyDelayModalPage', null)
  }

  openModal(pageName, listSegments) {
    // this.modalCtrl.create(pageName, listSegments)
    let myModal = this.modalCtrl.create(pageName, listSegments);

    myModal.onDidDismiss(data => {
      this.dataNote = data.Note;

      console.log('note: ', this.dataNote);
    })

    myModal.present();
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


  recordTime(segment, index){
    this.currentSegment = index;

    console.log('Segment: '+ index+ ' value: ');
    console.log(segment)

    if (index != 0){
      this.listSegments[index -1].DisplayTime = this.timer.displayTime;
    }
    if (index ==0){


      this.listSegments[this.listSegments.length-1].DisplayTime = this.timer.displayTime;

      for (let i=0; i<this.listSegments.length;i++){
        this.listSegments[i].DisplayTime = this.getSecondsAsDigitalClock(0);
      }
    }


    console.log(this.listSegments);

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

    clearInterval(processTimerTick);

    this.timer.hasStarted = true;
    this.timer.runTimer = true;

    this.timerTick();
    console.log('Record Time');
    //this.initTimer();
  }

  backStudy(){
    // do something
    this.navCtrl.pop();
  }

  resumeTimer() {
    this.startTimer();
  }

  pauseStudy(){
    this.timer.runTimer = false;
  }

  delayStudy(){

    this.openModalDelay();
    this.timer.runTimer = false;

    clearInterval(processCountTimerPause);
    this.intervalPause();

    console.log('Delay Study');
  }

  stopStudy(){
    // do something
    this.navCtrl.push(EndStudyPage);
    console.log('Stop StEndStudyPageudy');
  }

  timerTick() {
    processTimerTick =setTimeout(() => {
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
