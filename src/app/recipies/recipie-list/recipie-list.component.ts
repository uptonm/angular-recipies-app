import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.model';
import { mockData } from '../recipieMockData';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = mockData;
  @Output() recipieSelected = new EventEmitter<Recipie>();

  constructor() {}

  ngOnInit() {}

  onRecipieSelected(recipie: Recipie) {
    this.recipieSelected.emit(recipie);
  }
}
