import {Component, EventEmitter, Input, Output, Renderer, ViewChild} from '@angular/core';
import {ConstantProvider} from "../../providers/constant/constant";

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'timer-repit',
  templateUrl: 'timer-repit.html'
})
export class TimerRepit {

  @Input() timeInSeconds: number;
  @Input() checkStatus : string;
  @Output() timerReEnterPit = new EventEmitter();
  timer: CountdownTimer;


  @ViewChild('ReEnterPitId') RePitId : any;

  constructor(public renderer: Renderer, public constant: ConstantProvider){

  }

  ngOnInit() {
    this.initTimer();
    console.log('Check Status Repit:', this.checkStatus)
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
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
  }

  pauseTimer() {
    this.timer.runTimer = false;

    this.timerReEnterPit.emit(this.timer.displayTime);
  }

  resumeTimer() {
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
    this.timerReEnterPit.emit(this.timer.displayTime);

    if (this.checkStatus != this.constant.StatusReEnterPit){
      this.renderer.setElementAttribute(this.RePitId.nativeElement,'style','display : none')
    }
  }
}
