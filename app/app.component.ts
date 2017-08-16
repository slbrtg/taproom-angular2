import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  `
})

export class AppComponent {
  // constructor(public name: string, public brand: string, public price: number, public flavor: string){}
  masterKegList: Keg[] = [
    new Keg("Bucha", "Kom", 4, "Lavender Honey"),
    new Keg("Synergy", "Natural Something", 8, "Grass")
  ]
}
