import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/features/auth/authSlice";
import { authApi } from "@/store/features/auth/authApi";
import { categoriesApi } from "./features/categories/categoriesApi";
import { productsApi } from "./features/products/productsApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(categoriesApi.middleware)
        .concat(productsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
