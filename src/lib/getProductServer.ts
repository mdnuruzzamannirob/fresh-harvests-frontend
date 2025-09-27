import { productsApi } from "@/store/features/products/productsApi";
import { makeStore } from "@/store/store";

export async function getProductServer(id: any) {
  const store = makeStore();

  await store.dispatch(productsApi.endpoints.getProduct.initiate(id));
  await Promise.all(store.dispatch(productsApi.util.getRunningQueriesThunk()));

  const state = store.getState();
  const result = productsApi.endpoints.getProduct.select(id)(state);

  return {
    dehydratedState: state,
    data: result.data,
  };
}
