import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor(private recipieService: RecipiesService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }
}
