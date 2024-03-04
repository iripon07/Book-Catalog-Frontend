import { api } from "../../api/api";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    postBook: build.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags:["book"]
    }),
    getAllBooks: build.query({
      query: () => '/books/all-books',
      providesTags:['book']
    }),
  }),
});

export const { usePostBookMutation,useGetAllBooksQuery } = bookApi;
