export interface SearchResult {
  title: string;
  documentLink: string;
}

export interface SearchResponse {
  styleOfCause: string;
  citation: string;
  judgmentDate: string;
  url: string;
}

export interface SearchRequest {
  searchTerm: string;
}
