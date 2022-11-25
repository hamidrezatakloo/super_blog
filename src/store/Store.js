import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthenticationSlice";
export const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});
