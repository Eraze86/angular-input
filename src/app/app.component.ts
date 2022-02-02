import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Animal } from './modules/animals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
animal: Animal [] = [new Animal("cat", "black"), new Animal("dog", "brown")];
}
