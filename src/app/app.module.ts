import { SettingsPage } from './../pages/settings/settings';
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
import {TestTimerComponent} from "../components/test-timer/test-timer";
import {EmailComposer} from "@ionic-native/email-composer";
import {ThemingPage} from "../pages/theming/theming";
import {AppState} from "./app.global";
import {DozingTypeComponent} from "../components/dozing-type/dozing-type";
import {LoadingTypeComponent} from "../components/loading-type/loading-type";
import {DrillingTypeComponent} from "../components/drilling-type/drilling-type";
import {HaulingFullCycleTypeComponent} from "../components/hauling-full-cycle-type/hauling-full-cycle-type";
import {TrenchingExcavatingTypeComponent} from "../components/trenching-excavating-type/trenching-excavating-type";
import {HaulingTypeComponent} from "../components/hauling-type/hauling-type";

export const components = [
  Timer,
  TimerCarry,
  TimerPit,
  TimerRepit,
  TimerProgress,
  TestTimerComponent,
  DozingTypeComponent,
  LoadingTypeComponent,
  DrillingTypeComponent,
  HaulingFullCycleTypeComponent,
  TrenchingExcavatingTypeComponent,
  HaulingTypeComponent
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
    SettingsPage,
    ThemingPage,
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
    StudyPage,
    SettingsPage,
    ThemingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
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
    HomeProvider,
    AppState
  ]
})



export class AppModule {}
