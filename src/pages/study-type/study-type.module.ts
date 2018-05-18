import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyTypePage } from './study-type';

@NgModule({
  declarations: [
    StudyTypePage,
  ],
  imports: [
    IonicPageModule.forChild(StudyTypePage),
  ],
})
export class StudyTypePageModule {}
