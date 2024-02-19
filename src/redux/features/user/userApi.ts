import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: `auth/signup`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation } = userApi;


