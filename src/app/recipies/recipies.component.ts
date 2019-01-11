import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipie: Recipie;
  constructor(private recipieService: RecipiesService) {}

  ngOnInit() {
    this.recipieService.recipieSelected.subscribe((recipie: Recipie) => {
      this.selectedRecipie = recipie;
    });
  }
}
