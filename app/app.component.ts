import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <h1 class="jumbotron">Welcome to The Booch</h1>
  <h1>For Patrons,</h1>
  <patron-keg-list></patron-keg-list>
  <br>
  <h1>For Employees, </h1>
  <employee-keg-list></employee-keg-list>
  `
})
export class AppComponent {
  selectedKeg = null;

}
