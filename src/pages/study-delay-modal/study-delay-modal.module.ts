import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyDelayModalPage } from './study-delay-modal';

@NgModule({
  declarations: [
    StudyDelayModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyDelayModalPage),
  ],
})
export class StudyDelayModalPageModule {}
