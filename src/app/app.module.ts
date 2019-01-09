import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { RecipieListComponent } from "./recipies/recipie-list/recipie-list.component";
import { RecipieDetailComponent } from "./recipies/recipie-detail/recipie-detail.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipieItemComponent } from "./recipies/recipe-list/recipie-item/recipie-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipieItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
