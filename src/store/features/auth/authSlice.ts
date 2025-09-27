import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  token: null,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setLoading, setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
