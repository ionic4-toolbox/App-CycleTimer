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
  public fieldTextboxArray:any = [];
  public fieldNumberArray:any = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTemplatePage');
  }


  addFieldTextbox(){
    this.fieldTextboxArray.push({'text':''});
  }

  addFieldNumber(){
    this.fieldNumberArray.push({'number':''});
  }

  addSection(){
    this.sectionArray.push({'section':''});
  }

  cancelNewTemplate(){

  }

  saveNewTemplate(form){

    console.log(this.sectionArray)
    console.log(this.fieldTextboxArray)
    console.log(form.value)
    
  }
}
