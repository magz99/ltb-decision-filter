import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResponse } from './search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search(term: string): Observable<SearchResponse[]> {
    return of([{} as SearchResponse]);
  }
}
