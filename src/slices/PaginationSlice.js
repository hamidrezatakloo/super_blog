import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 1,
  pageNumbers: 1,
};

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    SetActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    SetPageNumbers: (state, action) => {
      state.pageNumbers = action.payload;
    },
  },
});

export const { SetActivePage, SetPageNumbers } = PaginationSlice.actions;
export default PaginationSlice.reducer;
