import { Injectable, EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';
import { mockData } from './recipieMockData';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private recipies: Recipie[] = mockData;
  recipieSelected = new EventEmitter<Recipie>();

  getRecipies() {
    // .slice() creates a duplicate array, not a reference
    return this.recipies.slice();
  }
}
