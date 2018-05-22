import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyPage } from './study';
import {AppModule} from "../../app/app.module";

@NgModule({
  declarations: [
    StudyPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyPage),
    AppModule
  ],
})
export class StudyPageModule {}
