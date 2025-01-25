import { createAsyncThunk } from "@reduxjs/toolkit";
import { testApi } from "../service/configApi.js";
import { errToast, successfullyToast } from "../../utils/toast.js";
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      // const response = await testApi.get("/users");
      const response = await testApi.get("/projects.json");
      if (response.status === 200) {
        successfullyToast("Successfully toasted!");
      }
      return response.data;
    } catch (error) {
      errToast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
