import {Component, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild} from '@angular/core';
import {ConstantProvider} from "../../providers/constant/constant";

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
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})

export class Timer {

  @Input() timeInSeconds: number =0;
  @Input() checkStatus : string;
  @Output() timerLoad = new EventEmitter();
  @Output() changeStatus = new EventEmitter();

  timer: CountdownTimer;

  @ViewChild('BeginLoadId') LoadId : any;

  public timePause: number;

  constructor(public renderer : Renderer, private constant: ConstantProvider){

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
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();

    this.changeStatus.emit(this.constant.StatusLoad);
  }

  pauseTimer() {
    this.timer.runTimer = false;

    this.timerLoad.emit(this.timer.displayTime);

    clearInterval(processCountTimerPause);
    this.intervalPause();
  }

  resumeTimer() {

    totalPause += timePause;
    console.log('time pause: ', timePause)
    console.log('total pause: ', totalPause);
    this.startTimer();
  }

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

  ngAfterViewInit(){
    this.timerLoad.emit(this.timer.displayTime);

    if (this.checkStatus != this.constant.StatusLoad){
      this.renderer.setElementAttribute(this.LoadId.nativeElement,'style','display : none')
    }
  }

  intervalPause(){
    timePause =0;
    processCountTimerPause = setInterval(()=>{
      timePause += 1;

    },1000)
  }

}
