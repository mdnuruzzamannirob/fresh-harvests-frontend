import { categoriesApi } from "@/store/features/categories/categoriesApi";
import { makeStore } from "@/store/store";

export async function getCategoriesServer() {
  const store = makeStore();

  await store.dispatch(categoriesApi.endpoints.getCategories.initiate());
  await Promise.all(
    store.dispatch(categoriesApi.util.getRunningQueriesThunk())
  );

  const state = store.getState();
  const result = categoriesApi.endpoints.getCategories.select()(state);

  return {
    dehydratedState: state,
    data: result.data,
  };
}
