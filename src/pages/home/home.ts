import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, Item, ActionSheetController } from 'ionic-angular';
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
  public template: string;

  // Send Email
  public subject= '';
  public body = '';
  public to ='';
  // public sort: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeProvider: HomeProvider, private database: DatabaseProvider,
    private utils: UtilitiesProvider,
    public actionSheetCtrl: ActionSheetController) {
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

    this.listTemplate.unshift({TemplateName: 'All'});

    this.template = 'All';

  }

  presentActionSheet(study, ev){
    const actionSheet = this.actionSheetCtrl.create({
      title: study.StudyName,
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            // this.moveDocumentModal(document);
            this.deleteItem(study, ev);
            console.log('Delete clicked');
          }
        }, {
          text: 'Rename',
          handler: () => {
            const navTransition = actionSheet.dismiss();
            navTransition.then(() => {
              // wait until action sheet dismisses
              // https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
              // this.renameDocument(document);
              console.log('Rename clicked');
            });
            return false;
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  deleteItem(study,ev){
    this.database.deleteItemFromStudies(study.StudyName);
    this.listStudy = this.database.getListStudy();
  }

  getStudyByTemplateName(templateName){
    console.log('dad', templateName)
    this.listStudy = this.homeProvider.getStudyByTemplateName(templateName);
  }

  onclickSettings(){
    this.navCtrl.push(SettingsPage)
  }

  onclickNewStudy(){
    this.navCtrl.push(StudyTypePage)
  }

  sendEmail(study,ev){
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
