import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface/User";
import { RootState } from "../store";

export interface UserState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
  currentPage: 0,
  totalPages: 8,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://user-list-server-node.vercel.app/person/p?page=${page}&limit=8`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.users;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.data.users;
export const selectStatus = (state: RootState) => state.data.status;
export const selectError = (state: RootState) => state.data.error;
export const selectCurrentPage = (state: RootState) => state.data.currentPage;
export const selectTotalPage = (state: RootState) => state.data.totalPages;
