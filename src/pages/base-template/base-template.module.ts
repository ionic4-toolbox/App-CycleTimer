import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaseTemplatePage } from './base-template';

@NgModule({
  declarations: [
    BaseTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(BaseTemplatePage),
  ],
})
export class BaseTemplatePageModule {}
