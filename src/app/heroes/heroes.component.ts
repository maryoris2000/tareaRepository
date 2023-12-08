import { Component, NgModule } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  standalone:true,
  imports :[
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe

  ],

})
export class HeroesComponent {
[x: string]: any;
  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  /*
  hero = 'Windstorm';
  */
  
  }

}
