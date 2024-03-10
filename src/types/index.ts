export interface SearchData {
  page: number;
  limit: string;
  sortBy: string;
  sortOrder: string;
  searchTerm: string;
  exactSearch: string;
  matchSearch: string;
}

export interface IBookValues {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  description: string;
  coverImage: string;
}