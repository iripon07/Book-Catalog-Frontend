import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      `https://book-catalog-backend-cyan-nine.vercel.app/api/v1/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      headers.set(`Content-Type`, `application/json`);
      return headers;
    },
  }),
  tagTypes: ["book", "review"],
  endpoints: () => ({}),
});
