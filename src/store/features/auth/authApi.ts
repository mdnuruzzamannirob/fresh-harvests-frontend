import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "./authSlice";
import { IUser } from "./types";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-fresh-harvest.code-commando.com/api/v1";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }: any) => {
      const token = (getState() as any).auth?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string; user: IUser },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch {
          dispatch(logout());
        }
      },
    }),
    register: builder.mutation<
      any,
      { name: string; email: string; password: string }
    >({
      query: (body) => ({ url: "/auth/register", method: "POST", body }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
