import { StudyDelayModalPage } from './../study-delay-modal/study-delay-modal';
import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Note} from 'ionic-angular';
import {ConstantProvider} from "../../providers/constant/constant";
import { StudyTypePage } from '../study-type/study-type';
import {Section} from "../../model/Section";
import {StudyProvider} from "../../providers/study/study";
import { StudySpilitsModalPage } from '../study-spilits-modal/study-spilits-modal';
import { EndStudyPage } from '../end-study/end-study';
import {TimerDelay} from "../../model/TimerDelay";
import {DatabaseProvider} from "../../providers/database/database";

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
let totalDelay =0;
let timeDelay =0;
let processCountTimerPause;
let processTimerTick;
let listTimerDelay = [];
let tempStudyTimer = [];

@IonicPage()
@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {
  public studyName : string;
  public listSegments : Array<Section>;
  public currentSegment : number;
  public tempTimeFirstSegment: string;

  public timeInSeconds: any;
  public timeDelay: number;
  public checkStatus : string;
  public started : boolean;
  timer: CountdownTimer;
  // check status IS Pause OR DELAY (IF PAUSE RETURN FALSE, IF DELAY RETURN TRUE)
  public checkStatusPause = false;

  public dataNote: string;
  public timerDelayStart : string;
  public checkCanNextCycle: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private constant : ConstantProvider,
    private studyProvider: StudyProvider, public modalCtrl: ModalController, private db: DatabaseProvider) {
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



  initTimer() {
    totalDelay =0;
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
    listTimerDelay = [];
    this.currentSegment = index;

    console.log('Segment: '+ index+ ' value: ');
    console.log(segment)

    if (index != 0){
      this.listSegments[index-1].DisplayTime = this.timer.displayTime;
    }
    if (index ==0){

      //this.listSegments[this.listSegments.length-1].DisplayTime = this.timer.displayTime;

      for (let i=0; i<this.listSegments.length;i++){
        this.listSegments[i].DisplayTime = this.getSecondsAsDigitalClock(0);
      }
    }
    if (index == this.listSegments.length -1){
      this.checkCanNextCycle = true;
    }else {
      this.checkCanNextCycle = false;
    }

    console.log('Timer Deylay: ', totalDelay)
    totalDelay =0;

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
    if (this.checkStatusPause == true){
      totalDelay += timeDelay;
      console.log('time delay: ', timeDelay)
      console.log('total delay: ', totalDelay);


      console.log('current INDEX : ', this.currentSegment);
      let timerDelay = new TimerDelay();
      console.log('data Note: ', this.dataNote)
      timerDelay.TimerDelayDescription = this.dataNote;
      timerDelay.TimerDelayStart = this.timerDelayStart;
      timerDelay.TimeDelay = this.getSecondsAsDigitalClock(timeDelay);

      listTimerDelay.push(timerDelay);
      //console.log('list timer delay: ', listTimerDelay)
      this.listSegments[this.currentSegment].ListTimerDelay = listTimerDelay;
      console.log('TIMER DELAY: ', timerDelay)
    }
    this.startTimer();
  }


  pauseStudy(){
    this.timer.runTimer = false;
    this.checkStatusPause = false;
  }

  openModal(pageName, listSegments) {
    // this.modalCtrl.create(pageName, listSegments)
    let myModal = this.modalCtrl.create(pageName, listSegments);
    myModal.onDidDismiss(data => {
      this.dataNote = data.Note;
    })

    myModal.present();
  }
  delayStudy(){

    let myModal = this.modalCtrl.create('StudyDelayModalPage', null);
    myModal.present();
    myModal.onDidDismiss(data => {
      this.checkStatusPause = true;
      this.timerDelayStart = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.dataNote = data.Note;

      console.log('data note: ', this.dataNote);

      this.timer.runTimer = false;
      clearInterval(processCountTimerPause);
      this.intervalPause();

    })

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

    timeDelay =0;
    processCountTimerPause = setInterval(()=>{
      timeDelay += 1;

    },1000)
  }


  nextCycle(){
    this.listSegments[this.listSegments.length-1].DisplayTime = this.timer.displayTime;
    console.log(this.listSegments);

    this.db.pushTimerToStudy(this.listSegments, this.studyName);

    this.checkCanNextCycle= false;


    this.pauseStudy();

  }

}
