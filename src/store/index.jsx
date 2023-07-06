import { configureStore } from "@reduxjs/toolkit";
import charList from "./modules/charListSlice";

export const store = configureStore({
    reducer: {
      charList
    }
});