import { Component } from '@angular/core';

/**
 * Generated class for the DrillingTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'drilling-type',
  templateUrl: 'drilling-type.html'
})
export class DrillingTypeComponent {

  text: string;

  constructor() {
    console.log('Hello DrillingTypeComponent Component');
    this.text = 'Hello World';
  }

}
