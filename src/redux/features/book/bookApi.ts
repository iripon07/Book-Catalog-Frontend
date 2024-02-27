import { SearchData } from "../../../types";
import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: ({
        page,
        limit,
        sortBy,
        sortOrder,
        searchTerm,
        exactSearch,
        matchSearch,
      }: SearchData) =>
        `/book/get-all-books?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&searchTerm=${matchSearch}&${searchTerm}=${exactSearch}`,
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
