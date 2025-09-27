import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "./types";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-fresh-harvest.code-commando.com/api/v1";

export const categoriesApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => "/category",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Category" as const, id })),
              { type: "Category", id: "LIST" },
            ]
          : [{ type: "Category", id: "LIST" }],
    }),
    getCategory: builder.query<ICategory, number>({
      query: (id) => `/category/${id}`,
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useLazyGetCategoriesQuery,
  useLazyGetCategoryQuery,
} = categoriesApi;
