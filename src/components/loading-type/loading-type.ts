import { Component } from '@angular/core';

/**
 * Generated class for the LoadingTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading-type',
  templateUrl: 'loading-type.html'
})
export class LoadingTypeComponent {

  text: string;

  constructor() {
    console.log('Hello LoadingTypeComponent Component');
    this.text = 'Hello World';
  }

}
