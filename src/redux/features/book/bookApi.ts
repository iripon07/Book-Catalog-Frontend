import { SearchData } from "../../../types";
import { api } from "../../api/api";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    postBook: build.mutation({
      query: (data) => ({
        url: `books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { usePostBookMutation, useGetAllBooksQuery } = bookApi;
