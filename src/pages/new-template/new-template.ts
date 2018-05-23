import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-template',
  templateUrl: 'new-template.html',
})
export class NewTemplatePage {

  public form:any;
  public sectionArray:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTemplatePage');
  }

  addSection(){
    this.sectionArray.push({'value':''});
  }

  cancelNewTemplate(){

  }

  saveNewTemplate(form){

  }
}
