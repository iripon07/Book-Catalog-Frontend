import { api } from "../../api/api";

export const wishListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBookToWishList: builder.mutation({
      query: (data) => ({
        url: `wishlist/add`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});

export const { useAddBookToWishListMutation } = wishListApi;

