import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/home",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHome: builder.query({
      query: ({ page, pageSize }) => ({
        url: `/${page}/${pageSize}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getHomeWithCatgory: builder.query({
      query: ({ category }) => ({
        url: `/${category}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getHomeDetail: builder.query({
      query: ({ id }) => ({
        url: `property/detail/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetHomeQuery,
  useGetHomeDetailQuery,
  useGetHomeWithCatgoryQuery,
} = homeApi;
