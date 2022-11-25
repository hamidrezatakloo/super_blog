import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
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
  },
});

export const { SetToken, SetUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
