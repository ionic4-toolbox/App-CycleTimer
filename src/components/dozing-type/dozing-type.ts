import { Component } from '@angular/core';

/**
 * Generated class for the DozingTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dozing-type',
  templateUrl: 'dozing-type.html'
})
export class DozingTypeComponent {

  text: string;

  constructor() {
    console.log('Hello DozingTypeComponent Component');
    this.text = 'Hello World';
  }

}
