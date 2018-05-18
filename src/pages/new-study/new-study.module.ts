import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStudyPage } from './new-study';

@NgModule({
  declarations: [
    NewStudyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStudyPage),
  ],
})
export class NewStudyPageModule {}
