import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    SignIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "signin",
        method: "POST",
        mode: "cors",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response) => response,
    }),
    SignUp: builder.mutation({
      query: ({ name, email, password }) => ({
        url: "user",
        method: "POST",
        mode: "cors",
        body: {
          name,
          email,
          password,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userApi;
