import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Animal } from './modules/animals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
animal: Animal [] = [new Animal("Cat", "Black", 4), new Animal("Dog", "Brown",  4)];
}
animalIsFeed(Animal){
 

}