import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken, setUser } from "./authSlice";
import Cookies from "js-cookie";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-fresh-harvest.code-commando.com/api/v1";

export const authApi = createApi({
  reducerPath: "authApi",
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

  endpoints: (builder) => ({
    login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.data.token));

          Cookies.set("token", data.data.token, {
            expires: 7,
            secure: true,
            sameSite: "Strict",
            path: "/",
          });
        } catch (err) {}
      },
    }),

    register: builder.mutation<
      { user: any },
      { fullName: string; email: string; password: string }
    >({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),

    getProfile: builder.query<any, void>({
      query: () => "/auth/profile",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));

          const cookieToken = Cookies.get("token");
          if (cookieToken) dispatch(setToken(cookieToken));
        } catch (err) {}
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } =
  authApi;
