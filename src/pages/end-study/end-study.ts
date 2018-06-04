import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Chart } from 'chart.js'
import { HomePage } from '../home/home';

/**
 * Generated class for the EndStudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-end-study',
  templateUrl: 'end-study.html',
})
export class EndStudyPage {
  // @ViewChild('barCanvas') barCanvas;

  // barChart: any;

  public listBackgroundColors: any = [
    { color: '#f04336'  },
    { color: '#fac135'  },
    { color: '#fbf132'  },
    { color: '#92ca58'  },
    { color: '#4fb152'  },
    { color: '#38b0f1'  },
    { color: '#0e6fc0'  },
    { color: '#01205f'  },
    { color: '#7645a1'  },
    { color: '#d9d9d9'  },
    { color: '#585858'  },
    { color: '#aeaaaa'  },
    { color: '#abb8ca'  },
    { color: '#f8cbac'  },
    { color: '#dbdbdb'  },
    { color: '#fee699'  },
    { color: '#b4c6e7'  },
    { color: '#c6e1b4'  },
    { color: '#bf3429'  },
  ];

  public summary: any = [
    {SectionName : 'Begin Load', displayTime: 45},
    {SectionName : 'Begin Carry', displayTime: 36},
    {SectionName : 'Leave Pit', displayTime: 105},
    {SectionName : 'ReEnter Pit', displayTime: 86},
  ];


  public totalTime: number = 0;
  public totalTimeStr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndStudyPage');
    this.init();
  }

  init(){

    for(let i = 0; i < this.summary.length; i++){
      this.totalTime += parseFloat(this.summary[i].displayTime) ;
    }
    this.totalTimeStr = this.timeFormat(this.totalTime);

    for(let i = 0; i < this.summary.length ; i++){
      this.summary[i].color = this.listBackgroundColors[i].color;
      this.summary[i].ratio = (parseFloat(this.summary[i].displayTime)/(this.totalTime))*100;
      this.summary[i].time = this.timeFormat(parseFloat(this.summary[i].displayTime));
    }
    console.log('Summary: ', this.summary);
  }

  timeFormat(totalSeconds){
    let str: string;

    let minutes = Math.floor(totalSeconds/60);
    let seconds = Math.round((totalSeconds/60 - minutes)*60);

    str = minutes + ':' + seconds;
    console.log('Time: ' ,str)

    return str
  }

  openModalSpilist(){

  }

  saveEndStudy(){
    this.navCtrl.push(HomePage)
  }

}
