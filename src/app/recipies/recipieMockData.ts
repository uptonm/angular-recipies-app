import { Recipie } from './recipie.model';
import { Ingredient } from '../shared/ingredient.model';
export const mockData: Recipie[] = [
  new Recipie(
    'Tasty Schnitzel',
    'A super-tasty Schnitzel - just awesome!',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  ),
  new Recipie(
    'Big Fat Burger',
    'What else you need to say?',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  )
];
