import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import data from '../../../data/2020.json';
import { SearchResponse } from '../services/search.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  searchValue = '';
  filteredData: SearchResponse[] = [];
  @Input() set searchTerm(value: string) {
    console.log('magz searchTerm value: ', value);
    this.searchValue = value;
    if (this.searchValue === '') {
      this.filteredData = [...this.originalData];
    } else {
      const filtered = this.originalData.filter((item) =>
        item.styleOfCause.toLowerCase().includes(this.searchValue.toLowerCase())
      );

      this.filteredData = [...filtered];
    }
  }

  originalData: SearchResponse[] = [];

  constructor() {}

  ngOnInit(): void {
    this.originalData = data;
    this.filteredData = this.originalData;
  }

  trackByName(index: number, item: SearchResponse): string {
    return item.styleOfCause;
  }
}
