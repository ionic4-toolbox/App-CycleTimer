import { Component } from '@angular/core';

/**
 * Generated class for the HaulingTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hauling-type',
  templateUrl: 'hauling-type.html'
})
export class HaulingTypeComponent {

  text: string;

  constructor() {
    console.log('Hello HaulingTypeComponent Component');
    this.text = 'Hello World';
  }

}
