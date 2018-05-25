import { Template } from './../../model/Template';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, Item } from 'ionic-angular';
import { StudyTypePage } from '../study-type/study-type';
import { DatabaseProvider } from '../../providers/database/database';
import {Study} from "../../model/Study";
import {HomeProvider} from "../../providers/home/home";
import {Template} from "../../model/Template";
import {UtilitiesProvider} from "../../providers/utilities/utilities";
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public listStudy : any;
  public listTemplate : any;
  activeItemSliding: ItemSliding = null;

  // Send Email
  public subject= '';
  public body = '';
  public to ='';
  // public sort: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeProvider: HomeProvider, private database: DatabaseProvider, private utils: UtilitiesProvider) {
      this.initHome();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  initHome(){
    this.listStudy = this.homeProvider.getListStudy();
    //let arrTemplate =  this.database.getListTemplate();
    this.listTemplate = this.database.getListTemplate();
    // this.sort = {TemplateName: 'Dozing'}

    this.listTemplate.push({TemplateName: 'All'});
    console.log('List Template 1: ', this.listTemplate)

  }

  openOption(itemSlide: ItemSliding, item: Item, event) {
    console.log('opening item slide..');
    event.stopPropagation(); // here if you want item to be tappable
    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
      this.closeOption();
    }

    this.activeItemSliding = itemSlide;
    const swipeAmount = 33; // set your required swipe amount

    console.log('swipe amount ', swipeAmount);
    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);

    itemSlide.setElementClass('active-slide', true);
    itemSlide.setElementClass('active-options-right', true);
    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
  }

  closeOption() {
    console.log('closing item slide..');

    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }

  onclickStudyType(){
    this.navCtrl.push(StudyTypePage)
  }

  deleteItem(study,event){
    this.database.deleteItemFromStudies(study.StudyName);
    this.listStudy = this.database.getListStudy();
  }

  getStudyByTemplateName(templateName){
    console.log('dad', templateName)
    this.listStudy = this.homeProvider.getStudyByTemplateName(templateName);
  }

  // compareFn(option1: any, option2: any) {
  //   return option1.value === option2.value;
  // }


  nextPageSettings(){
    this.navCtrl.push(SettingsPage)
  }

  sendEmail(){
    let email ={
      to : this.to,
      cc : [],
      bcc : [],
      attachment : [],
      subject : this.subject,
      body: this.body,
      isHtml : false,
      app: 'Gmail'
    }

    this.utils.sendEmail(email);
  }

}
