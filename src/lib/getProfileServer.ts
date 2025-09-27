import { authApi } from "@/store/features/auth/authApi";
import { makeStore } from "@/store/store";
import { cookies } from "next/headers";

export async function getProfileServer() {
  const store = makeStore();

  const cookie = await cookies();
  const token = cookie.get("token");

  if (token) {
    store.dispatch({ type: "auth/setToken", payload: token.value });
  }

  await store.dispatch(authApi.endpoints.getProfile.initiate());

  await Promise.all(store.dispatch(authApi.util.getRunningQueriesThunk()));
  return store.getState();
}
