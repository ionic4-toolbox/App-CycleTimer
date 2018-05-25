import {Component, EventEmitter, Input, Output, Renderer, ViewChild} from '@angular/core';
import {ConstantProvider} from "../../providers/constant/constant";

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
  displayTimeCarry: string;
  displayTimeLeavePit : string;
  displayTimeReEnterPit : string;
}

/**
 * Generated class for the TestTimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-timer',
  templateUrl: 'test-timer.html'
})

export class TestTimerComponent {

  @Input() timeInSeconds: number;
  @Input() checkStatus : string;
  @Output() timerCarry = new EventEmitter();
  @Output() changeStatus = new EventEmitter();
  timer: CountdownTimer;

  public currentSegment;

  @ViewChild('BeginCarryId') CarryId : any;

  constructor(public renderer: Renderer, public constant: ConstantProvider){
    this.currentSegment = 'Load'
  }

  ngOnInit() {
    this.initTimer();
    //console.log('Status Timer Carry: ', this.checkStatus)
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

    this.timer.displayTimeCarry = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

    this.timer.displayTimeLeavePit = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

    this.timer.displayTimeReEnterPit = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

  }

  startTimer(ev) {
    if (ev!= null){
      this.currentSegment = ev;
      console.log('aaaaaa')
    }

    console.log('current segment:', this.currentSegment)

    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();

    //this.changeStatus.emit(this.constant.StatusCarry);


  }

  pauseTimer() {
    this.timer.runTimer = false;
    //this.timerCarry.emit(this.timer.displayTime);

  }

  resumeTimer() {
    this.startTimer(null);
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining++;

      if (this.currentSegment == 'Load'){
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      }else if (this.currentSegment == 'Carry'){
        this.timer.displayTimeCarry = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      } else  if (this.currentSegment == 'LeavePit'){
        this.timer.displayTimeLeavePit = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      }else {
        this.timer.displayTimeReEnterPit = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      }
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
    // this.timerCarry.emit(this.timer.displayTime);
    //
    //
    // console.log(this.checkStatus)
    // if (this.checkStatus != this.constant.StatusCarry){
    //   this.renderer.setElementAttribute(this.CarryId.nativeElement,'style','display : none')
    // }
  }

}

