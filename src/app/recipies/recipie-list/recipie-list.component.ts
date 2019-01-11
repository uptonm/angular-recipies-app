import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[];

  constructor(private recipieService: RecipiesService) {}

  ngOnInit() {
    this.recipies = this.recipieService.getRecipies();
  }
}
