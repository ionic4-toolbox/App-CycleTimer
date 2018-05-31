import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppState } from '../../app/app.global';
import {ConstantProvider} from "../../providers/constant/constant";
import {DatabaseProvider} from "../../providers/database/database";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public timeUnits : any;
  public unitsOfMeasure : any;

  public checkTimeUnit = false;
  public checkUnitOfMeasure = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: AppState, private constant: ConstantProvider, private db: DatabaseProvider) {
    this.init();
  }
  init(){
    this.timeUnits = this.constant.TimeUnit;
    this.unitsOfMeasure = this.constant.UnitsOfMeasure;

    if (this.db.getTimeUnit() == null){
      this.db.saveTimeUnit(this.constant.TimeUnit.MinutesSeconds);
    }
    if (this.db.getUnitOfMeasure() == null){
      this.db.saveUnitOfMeasure(this.constant.UnitsOfMeasure.English);
    }

    this.checkTimeUnit = (this.db.getTimeUnit() == this.constant.TimeUnit.MinutesSeconds) ? false : true;
    this.checkUnitOfMeasure = (this.db.getUnitOfMeasure() == this.constant.UnitsOfMeasure.English) ? false : true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
    console.log(theme)
  }

  updateCheckTimeUnit(ev){
    if (ev.checked){
      this.db.saveTimeUnit(this.constant.TimeUnit.FractionalMinutes);
    }else {
      this.db.saveTimeUnit(this.constant.TimeUnit.MinutesSeconds);
    }

  }
  updateCheckUnitMeasure(ev){
    if (ev.checked){
      this.db.saveUnitOfMeasure(this.constant.UnitsOfMeasure.Metric);
    }else {
      this.db.saveUnitOfMeasure(this.constant.UnitsOfMeasure.English);
    }
  }

}
