import { Injectable } from '@angular/core';

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class TimerDelay {
  public TimerDelayName : string;
  public TimerDelayDescription : string;
  public TimerDelayStart : string;
  public TimeDelay : string;
  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
