import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTemplatePage } from './new-template';

@NgModule({
  declarations: [
    NewTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(NewTemplatePage),
  ],
})
export class NewTemplatePageModule {}
