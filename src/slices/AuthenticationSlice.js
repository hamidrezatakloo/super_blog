import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  verify: false,
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    SetToken: (state, action) => {
      state.token = action.payload;
    },
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    SetVerify: (state, action) => {
      state.verify = action.payload;
    },
  },
});

export const { SetToken, SetUser, SetVerify } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
