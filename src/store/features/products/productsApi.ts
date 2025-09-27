import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IApiResponse, ISingleApiResponse } from "./types";
import Cookies from "js-cookie";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-fresh-harvest.code-commando.com/api/v1";

export const productsApi = createApi({
  reducerPath: "productsApi",
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
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<IApiResponse, void>({
      query: () => "/products",
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({
                type: "Product" as const,
                id,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getProduct: builder.query<ISingleApiResponse, string>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useLazyGetProductQuery,
  useLazyGetProductsQuery,
} = productsApi;
