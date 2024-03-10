export type IBookReview = {
  rating: string;
  comment: string;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: IBookReview[];
  image?: string;
  description?: string;
  _id?: string;
};

export const genres = [
  "Fiction",
  "Non-fiction",
  "Sci-fi",
  "Mystery",
  "Thriller",
  "Children's book",
  "Religious",
  "History",
  "Biography",
];