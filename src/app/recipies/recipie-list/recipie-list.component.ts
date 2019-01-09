import { Component, OnInit } from "@angular/core";
import { Recipie } from "../recipie.model";

@Component({
  selector: "app-recipie-list",
  templateUrl: "./recipie-list.component.html",
  styleUrls: ["./recipie-list.component.css"]
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie(
      "Test Recipie Title",
      "Test Recipie Description",
      "https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg"
    ),
    new Recipie(
      "Test Recipie Title",
      "Test Recipie Description",
      "https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
