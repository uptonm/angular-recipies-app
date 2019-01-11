import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipiesService } from '../../recipies.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor(private recipieService: RecipiesService) {}

  ngOnInit() {}

  select() {
    this.recipieService.recipieSelected.emit(this.recipie);
  }
}
