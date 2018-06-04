import { Injectable } from '@angular/core';
import {TimerDelay} from "./TimerDelay";

/*
 Generated class for the BaseProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class Section {
  public SectionName : string;
  public DisplayTime : string;
  public ListTimerDelay : Array<TimerDelay>

  constructor() {
    console.log('Hello BaseProvider Provider');
  }

}
