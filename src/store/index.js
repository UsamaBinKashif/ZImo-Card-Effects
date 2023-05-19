import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./features/modalSlice.js";

const store = configureStore({
  // reducers here
  reducer: {
    modals: modalSlice,
  },
});

export default store;
