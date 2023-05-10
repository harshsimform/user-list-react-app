import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HoverUserState, User } from "../../interface/interfaces";

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
