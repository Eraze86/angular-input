import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Animal } from 'src/app/modules/animals';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {
  @Output() fed = new EventEmitter<Animal>()
  @Input() animal: Animal = new Animal('', '', 2);


isFed: boolean = false
  constructor() { }
 
  ngOnInit(): void {
  }

  feedTheAnimal(){
    this.fed.emit(this.animal)
    this.isFed= true
  }
}
