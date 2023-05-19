import { createSlice } from "@reduxjs/toolkit";
import { modals } from "lib/constants";
export const modalSlice = createSlice({
  name: "modals",
  initialState: {
    currentModal: modals.default,
  },

  reducers: {
    changeCurrentModal: (state, action) => {
      state.currentModal = action.payload;
    },
  },
});

export const { changeCurrentModal } = modalSlice.actions;

export default modalSlice.reducer;
