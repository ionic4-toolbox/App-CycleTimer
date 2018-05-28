import { Component } from '@angular/core';

/**
 * Generated class for the HaulingFullCycleTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hauling-full-cycle-type',
  templateUrl: 'hauling-full-cycle-type.html'
})
export class HaulingFullCycleTypeComponent {

  text: string;

  constructor() {
    console.log('Hello HaulingFullCycleTypeComponent Component');
    this.text = 'Hello World';
  }

}
