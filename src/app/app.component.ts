import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipiePage: Boolean = true;
  shoppingPage: Boolean = false;

  changePage = (event: String) => {
    if (event === 'recipiePage') {
      this.recipiePage = true;
      this.shoppingPage = false;
    } else {
      this.recipiePage = false;
      this.shoppingPage = true;
    }
  };
}
