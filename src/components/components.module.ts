import { NgModule } from '@angular/core';
import { TestTimerComponent } from './test-timer/test-timer';
import { DozingTypeComponent } from './dozing-type/dozing-type';
import { HaulingTypeComponent } from './hauling-type/hauling-type';
import { LoadingTypeComponent } from './loading-type/loading-type';
import { HaulingFullCycleTypeComponent } from './hauling-full-cycle-type/hauling-full-cycle-type';
import { DrillingTypeComponent } from './drilling-type/drilling-type';
import { TrenchingExcavatingTypeComponent } from './trenching-excavating-type/trenching-excavating-type';
@NgModule({
	declarations: [TestTimerComponent,
    DozingTypeComponent,
    HaulingTypeComponent,
    LoadingTypeComponent,
    HaulingFullCycleTypeComponent,
    DrillingTypeComponent,
    TrenchingExcavatingTypeComponent],
	imports: [],
	exports: [TestTimerComponent,
    DozingTypeComponent,
    HaulingTypeComponent,
    LoadingTypeComponent,
    HaulingFullCycleTypeComponent,
    DrillingTypeComponent,
    TrenchingExcavatingTypeComponent]
})
export class ComponentsModule {}
