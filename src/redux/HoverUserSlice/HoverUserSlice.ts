import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interface/User";

export interface HoverUserState {
  hoveredUser: User | null;
}

const initialState: HoverUserState = {
  hoveredUser: null,
};

const hoverUserSlice = createSlice({
  name: "hoveredUser",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.hoveredUser = action.payload;
    },
    removeUser: (state) => {
      state.hoveredUser = null;
    },
  },
});

export const { addUser, removeUser } = hoverUserSlice.actions;

export default hoverUserSlice.reducer;
