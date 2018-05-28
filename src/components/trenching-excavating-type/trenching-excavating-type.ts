import { Component } from '@angular/core';

/**
 * Generated class for the TrenchingExcavatingTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trenching-excavating-type',
  templateUrl: 'trenching-excavating-type.html'
})
export class TrenchingExcavatingTypeComponent {

  text: string;

  constructor() {
    console.log('Hello TrenchingExcavatingTypeComponent Component');
    this.text = 'Hello World';
  }

}
