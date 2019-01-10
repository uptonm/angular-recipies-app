import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipie: Recipie;
  constructor() {}

  ngOnInit() {}
}
