import { Ingredient } from '../shared/ingredient.model';

export class Recipie {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
