import { productsApi } from "@/store/features/products/productsApi";
import { makeStore } from "@/store/store";

export async function getProductsServer() {
  const store = makeStore();

  await store.dispatch(productsApi.endpoints.getProducts.initiate());

  await Promise.all(store.dispatch(productsApi.util.getRunningQueriesThunk()));

  const state = store.getState();
  const result = productsApi.endpoints.getProducts.select()(state);

  return {
    dehydratedState: state,
    data: result.data,
  };
}
