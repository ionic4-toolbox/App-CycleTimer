import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppState } from '../../app/app.global';

/**
 * Generated class for the ThemingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theming',
  templateUrl: 'theming.html',
})
export class ThemingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public global : AppState) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemingPage');
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }

}
