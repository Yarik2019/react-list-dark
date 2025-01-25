import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations.js";
import { selectUsers } from "./selectors.js";
import {
  selectedNameFilter,
  selectedSortKey,
  selectedSortOrder,
} from "../filters/selectors";
const initialState = { items: [], isLoading: false, isError: null };

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isError = null;
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(fetchUsers.pending), (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(isAnyOf(fetchUsers.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(fetchUsers.fulfilled), (state) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const selectFilteredUsers = createSelector(
  [selectUsers, selectedNameFilter, selectedSortKey, selectedSortOrder],
  (users, filter, sortKey, sortOrder) => {
    if (!Array.isArray(users)) {
      console.error("users не є масивом:", users);
      return [];
    }

    const normalizedFilter = filter.toLowerCase().trim();

    return users
      .filter(
        ({ name, email }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          email.toLowerCase().includes(normalizedFilter)
      )
      .sort((a, b) => {
        if (sortKey === "name") {
          return sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else if (sortKey === "age") {
          return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
        }
        return 0;
      });
  }
);

export const usersReducer = usersSlice.reducer;
