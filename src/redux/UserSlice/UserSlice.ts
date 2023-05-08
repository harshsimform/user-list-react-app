import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserRecord from "../../json/userRecord.json";
import { User } from "../../interface/User";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: UserRecord,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
