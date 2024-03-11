import { SearchData } from "../../../types";
import { api } from "../../api/api";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBooksFromDB: build.query({
      query: () => `books/all-books`,
      providesTags: ["book"],
    }),
    getAllBooks: build.query({
      query: ({
        page,
        limit,
        sortBy,
        sortOrder,
        exactSearch,
        matchSearch,
        searchTerm,
      }: SearchData) =>
        `books/all-books?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&searchTerm=${searchTerm}&exactSearch=${exactSearch}&matchSearch=${matchSearch}`,
      providesTags: ["book"],
    }),
    addBook: build.mutation({
      query: (data) => ({
        url: `books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    getSingleBook: build.query({
      query:(id) => `books/${id}`,
      providesTags:['book']
    })
  }),
});

export const {useGetAllBooksFromDBQuery, useAddBookMutation, useGetAllBooksQuery, useGetSingleBookQuery } = bookApi;
