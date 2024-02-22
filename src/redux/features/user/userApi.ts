import { apiSlice } from "../api/apiSlice";



export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `auth/signup`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation } = userApi;


