import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') itemNameRef: ElementRef;
  @ViewChild('itemAmount') itemAmountRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  itemName: string;
  itemAmount: number;
  constructor() {}

  ngOnInit() {}

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.itemNameRef.nativeElement.value,
        this.itemAmountRef.nativeElement.value
      )
    );
  }
}
