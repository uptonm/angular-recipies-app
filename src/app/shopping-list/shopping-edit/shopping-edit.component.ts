import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') itemNameRef: ElementRef;
  @ViewChild('itemAmount') itemAmountRef: ElementRef;

  itemName: string;
  itemAmount: number;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.itemNameRef.nativeElement.value,
        this.itemAmountRef.nativeElement.value
      )
    );
  }
}
