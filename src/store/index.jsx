import { configureStore } from "@reduxjs/toolkit";
import drama from "./modules/dramaSlice";

export const store = configureStore({
    reducer: {
      drama
    }
});