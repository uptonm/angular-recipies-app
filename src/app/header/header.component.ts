import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() pageChange = new EventEmitter<String>();
  currentPage: String = 'recipiePage';

  onClick = (page: String) => {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  };
}
