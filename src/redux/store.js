import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./features/contactSlice";

const store = configureStore({
  reducer: {
    contactsList: contactSlice,
  },
});

export default store;
