import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders:(headers, {getState}) => {
      const token = (getState() as RootState).user.token;
      if(token){
        headers.set("Authorization", ${token})
      }
      headers.set("Content-Type", "application/json")
      return headers
    }
  }),
  
  endpoints: () => ({}),
  tagTypes: ["book", "review"],
});


