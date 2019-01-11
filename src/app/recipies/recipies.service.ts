import { Injectable, EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';
import { mockData } from './recipieMockData';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private recipies: Recipie[] = mockData;
  recipieSelected = new EventEmitter<Recipie>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipies() {
    // .slice() creates a duplicate array, not a reference
    return this.recipies.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
