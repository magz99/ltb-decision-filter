import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  searchTerm = '';
  // observable here to render search results
  constructor() {}

  handleSearchClick(searchInput: IonInput): void {
    searchInput.getInputElement().then((el) => {
      this.searchTerm = el.value;
      // console.log('magz el value: ', el.value);
      // call search service to perform search
    });
  }

  handleSearchClear(): void {
    this.searchTerm = '';
  }
}
