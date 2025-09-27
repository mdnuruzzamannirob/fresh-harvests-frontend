"use client";

import { AppStore, makeStore } from "@/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({
  children,
}: {
  children: React.ReactNode;
  initialState?: any;
}) => {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
