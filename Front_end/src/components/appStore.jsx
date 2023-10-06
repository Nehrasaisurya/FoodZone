import CardReducer from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    cart: CardReducer,
  },
});

export default appStore;
