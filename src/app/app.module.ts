import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigProvider } from '../providers/config/config';
import { UtilitiesProvider } from '../providers/utilities/utilities';
import { BaseProvider } from '../providers/base/base';
import { DatabaseProvider } from '../providers/database/database';
import {HttpModule} from "@angular/http";
import { LoginProvider } from '../providers/login/login';
import { NewStudyProvider } from '../providers/new-study/new-study';
import { SummaryProvider } from '../providers/summary/summary';
import { StudyProvider } from '../providers/study/study';
import { ConstantProvider } from '../providers/constant/constant';
import { NewTemplateProvider } from '../providers/new-template/new-template';
import { StudyTypeProvider } from '../providers/study-type/study-type';
import { HomeProvider } from '../providers/home/home';
import { LoginPage } from '../pages/login/login';
import { StudyTypePage } from '../pages/study-type/study-type';
import { NewTemplatePage } from '../pages/new-template/new-template';
import { BaseTemplatePage } from '../pages/base-template/base-template';
import {StudyPage} from "../pages/study/study";

import { Timer } from '../components/countdown-timer/timer';
import { TimerProgress } from '../components/timer-progress/timer-progress';
import { TimelineComponentModule } from '../components/timeline/timeline.module';
import { TimerCarry } from '../components/countdown-timer/timer-carry';
import { TimerPit } from '../components/countdown-timer/timer-pit';
import { TimerRepit } from '../components/countdown-timer/timer-repit';

export const components = [
  Timer,
  TimerCarry,
  TimerPit,
  TimerRepit,
  TimerProgress
];

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    StudyTypePage,
    NewTemplatePage,
    BaseTemplatePage,
    StudyPage,
    components
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    StudyTypePage,
    NewTemplatePage,
    BaseTemplatePage,
    StudyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    UtilitiesProvider,
    BaseProvider,
    DatabaseProvider,
    LoginProvider,
    NewStudyProvider,
    SummaryProvider,
    StudyProvider,
    ConstantProvider,
    NewTemplateProvider,
    StudyTypeProvider,
    HomeProvider
  ]
})



export class AppModule {}
