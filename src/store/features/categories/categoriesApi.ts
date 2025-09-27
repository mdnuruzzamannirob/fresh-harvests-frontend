import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IApiResponse, ICategory } from "./types";
import Cookies from "js-cookie";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-fresh-harvest.code-commando.com/api/v1";

export const categoriesApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth?.token;
      const cookieToken = Cookies.get("token");

      if (token) headers.set("Authorization", `${token}`);
      else if (cookieToken) headers.set("Authorization", `${cookieToken}`);

      return headers;
    },
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<IApiResponse, void>({
      query: () => "/category",
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({
                type: "Category" as const,
                id,
              })),
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
