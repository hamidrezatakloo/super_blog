import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthenticationSlice";
import paginationSlice from "../slices/PaginationSlice";
export const store = configureStore({
  reducer: {
    authentication: authReducer,
    pagination: paginationSlice,
  },
});
