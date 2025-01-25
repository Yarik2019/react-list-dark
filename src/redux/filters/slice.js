import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  sortKey: null,
  sortOrder: "asc",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    handleSort: (state, action) => {
      const { key, order } = action.payload;
      state.sortKey = key;
      state.sortOrder = order;
    },
  },
});

export const { changeFilter, handleSort } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
