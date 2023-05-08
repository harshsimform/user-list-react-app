import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice/UserSlice";
import hoverUserSlice from "./HoverUserSlice/HoverUserSlice";

export const store = configureStore({
  reducer: {
    data: userSlice,
    hoverData: hoverUserSlice,
  },
  devTools: false,
});
